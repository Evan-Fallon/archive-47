import { Temporal } from '@js-temporal/polyfill'
import type { TimelineData, TimelineEntry } from './inlineToTimeline'
import type { InlineProperty } from './vaultQuery'


export function groupEntries( data: TimelineData ) {

const createEmptyGroup = (): TimelineEntry => ({ 
    Properties: data.Entries[0].Properties as InlineProperty, 
    Children: [], 
    EntryName: false as string | boolean, 
    Display: "Basic", 
    Index: 0 
} as TimelineEntry )
let currentGroup = createEmptyGroup()

const groupedEntries = [] as TimelineEntry[]
data.Entries.forEach((entry, index) => {
    if (!entry.Display.includes("Group")) {
        if (currentGroup.EntryName) {
            groupedEntries.push(currentGroup)
            currentGroup = createEmptyGroup()
        }
        groupedEntries.push(entry)
    } else {
        if (!currentGroup.EntryName) {
            currentGroup = entry
            currentGroup.EntryName = entry.Properties.FileName
            currentGroup.Children = [entry.Properties]
        } else if (currentGroup.EntryName && currentGroup.EntryName !== entry.Properties.FileName) {
            groupedEntries.push(currentGroup)
            currentGroup = entry
            currentGroup.EntryName = entry.Properties.FileName
            currentGroup.Children = [entry.Properties]
        }
        else {
            currentGroup?.Children?.push(entry.Properties)
        }
        if (index === data.Entries.length - 1) {
            groupedEntries.push(currentGroup)
        }
    }
})


data.Entries = groupedEntries
}