import { Temporal } from '@js-temporal/polyfill'
import { propertyParser } from './propertyParser';
import { extractContentSection } from './extractContentSection';
import { stripAtomFormatting } from './stripAtomFormatting';
import type { InlineProperty, VaultNote } from './vaultQuery';


export function loadInlineProperties(file: VaultNote): VaultNote {
    
/* INLINE PROPERTIES */
    const inlineProperties: InlineProperty[] = []
    const regex = /%%\(([^:]+)::(.*?)\)%%/g;
    for (const match of file.FileContent.matchAll(regex)) {
        const matchIndex = match.index ?? 0
        const lineNumber = file.FileContent.substring(0, matchIndex).split('\n').length - 1;
        const priorLine = file.FileContent.split('\n')[lineNumber - 1]
        const strippedLine = stripAtomFormatting(file.FileContent.split('\n')[lineNumber - 1])
        const userInput =  match[2].trim()
        const thisInline: InlineProperty = {
            Line: lineNumber,
            FileName: file.BaseName,
            raw: userInput,
            SourceLink: file.Frontmatter?.URL,
            PriorLine: priorLine,
            StrippedLine: strippedLine,
            Date: Temporal.Now.plainDateTimeISO(),
            DateString: "01-01-2026",
            Display: "Basic",
            OrdinalDay: "1st",
            Frontmatter: file.Frontmatter,
            Name: ""
        }
        if (userInput.includes(" | ")) {
            userInput.split(" | ").forEach(pair => {
                let [key, value] = pair.split(": ").map(x => x.trim())
                const parsedValue = propertyParser(thisInline, key, value)
            })
        }
        if (thisInline.Display === "Twitter" || thisInline.Display === "Truth") {
            const contentSection = extractContentSection(file.FileContent)
            thisInline.Content = contentSection
        }
        if (file.Frontmatter?.["Archive-47"] === true) {
            const linkBase = thisInline.FileName
            const searchTerms = priorLine.split(/(?<!\b(?:Mr|Mrs|Dr|Sr|Jr|Inc|Co|Ltd|i\.e|e|\d\.g))\.\s/).map((s: string) => encodeURIComponent(s)).join("&text=")
            thisInline.SourceLink = `${linkBase}#:~:text=${searchTerms}`

        } else if (file.Frontmatter?.Paywalled !== false) {
            const searchTerms = priorLine.split(/(?<!\b(?:Mr|Mrs|Dr|Sr|Jr|Inc|Co|Ltd|i\.e|e\.g))\.\s/).map((s: string) => encodeURIComponent(s)).join("&text=")
            thisInline.SourceLink = `${thisInline.URL}#:~:text=${searchTerms}`
        }
        inlineProperties.push(thisInline)
    }
    


    return {
        ...file,
        inlineProperties: inlineProperties,
    }
}
