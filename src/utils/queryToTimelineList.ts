import { type InlineProperty } from "./atomizeMarkdown"

export interface timelineData {
    Months: any[];
    Years: any[];
    SpanTracks: any[];
    Spans: any[];
    Nodes: any[];
    Length: number;
}

export function queryToTimelineLists(inlines: InlineProperty[]): timelineData {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let currentNodes: any[] = []
    let currentYears = [{year: inlines[0].Date.year, yIndex: 1, yEnd: 2}]
    let currentMonths = [{month: months[inlines[0].Date.month - 1], yIndex: 2, yEnd: 2}]
    let currentSpans: any[] = []
    let yIndex = 3
    inlines.forEach(atom => {
    const thisYear = atom.Date.year
    const thisMonth = months[atom.Date.month - 1]
        if (thisYear !== currentYears[currentYears.length - 1].year) {
            currentYears[currentYears.length - 1].yEnd = yIndex
            currentYears.push({year: thisYear, yIndex: yIndex, yEnd: yIndex + 1})
            yIndex++
            currentMonths.push({month: thisMonth, yIndex: yIndex, yEnd: yIndex + 1})
            yIndex++
        } 
        else if (thisMonth !== currentMonths[currentMonths.length - 1].month) { 
            yIndex++
            currentMonths.push({month: thisMonth, yIndex: yIndex, yEnd: yIndex + 1})
            yIndex++
        }
        if (atom?.["Span Start"]) {
            currentSpans.push({name: atom["Span Start"], date: atom.Date, yIndex: yIndex, yEnd: yIndex + 1})    
        }
        if (atom?.["Span End"]) {
            const endSpan = currentSpans.find(span => span.name === atom["Span End"])
            if (endSpan) {
                endSpan.yEnd = yIndex
            }
        }
        currentNodes.push({...atom, Index: yIndex})
        yIndex++
    })  
    currentYears[currentYears.length - 1].yEnd = yIndex 
    currentMonths[currentMonths.length - 1].yEnd = yIndex 
    const spanTracks = []
    for (const span of currentSpans) {
        let assigned = false
        for (let i = 0; i < spanTracks.length; i++) {
            if (!spanTracks[i].some(t => !(t.yEnd <= span.yIndex || span.yEnd <= t.yIndex))) {
                spanTracks[i].push(span)
                assigned = true
                break
            }
        }
        if (!assigned) spanTracks.push([span])
    }
    const numberedSpans = spanTracks.map((track, trackInd) => {
        return (
            track.map(span => {
            return (
            {...span, trackInd: trackInd}
            )})
        )
    }).flat()
    return {
        Years: currentYears, 
        Months: currentMonths, 
        Nodes: currentNodes, 
        SpanTracks: currentSpans, 
        Spans: numberedSpans,
        Length: yIndex
    }
}