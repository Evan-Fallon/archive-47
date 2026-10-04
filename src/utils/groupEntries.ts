import { Temporal } from '@js-temporal/polyfill'
import type { TimelineData, TimelineEntry } from './inlineToTimeline'
import type { InlineProperty } from './vaultQuery'


export function groupEntries( atoms: TimelineData) {

let currentGroup = { InlineProperties: [] as InlineProperty[], EntryName: false as string | boolean, Display: "Basic", Index: 0 } 
const emptyGroup = { InlineProperties: [] as InlineProperty[], EntryName: false as string | boolean, Display: "Basic", Index: 0 } 

const groupedAtoms = [] as TimelineEntry[]
atoms.Entries.forEach((atom, index) => {
    const thisAtom = atom.InlineProperties[0]
    if (!atom.Display.includes("Group")) {
        if (currentGroup.EntryName) {
            groupedAtoms.push(currentGroup)
            currentGroup = emptyGroup
        }
        groupedAtoms.push(atom)
    } else {
        if (!currentGroup.EntryName) {
            currentGroup = atom
        } else if (currentGroup.EntryName && currentGroup.EntryName !== atom.EntryName) {
            groupedAtoms.push(currentGroup)
            currentGroup.InlineProperties.push(atom.InlineProperties[0])
        }
        else {
            currentGroup.InlineProperties.push(atom.InlineProperties[0])
        }
        if (index === atoms.Entries.length - 1) {
            groupedAtoms.push(currentGroup)
        }
    }
})

atoms.Entries = groupedAtoms
}