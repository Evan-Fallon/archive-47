import matter from 'gray-matter'
import { Temporal } from '@js-temporal/polyfill'
import { propertyParser } from './propertyParser';
import { extractContentSection } from './extractContentSection';
import { stripAtomFormatting } from './stripAtomFormatting';
import path from 'node:path' 


export interface frontmatter {
    [key: string]: any;
    Series?: string;
}

export interface InlineProperty {
    Line: number;
    Series?: string;
    FileName: string;
    SourceLink: string
    raw: string;
    PriorLine: string;
    Date: Temporal.PlainDateTime;
    DateString?: string;
    OrdinalDay: string;
    DisplayImage?: string;
    Frontmatter: frontmatter;
    [key: string]: any;
}

export interface VaultNote {
  name: string;
  path: string
  frontmatter: Record<string, any>;
  inlineProperties: InlineProperty[];
  content?: any;
}

export function atomizeMarkdownFile(content: string, filePath: string): VaultNote {

/* CONTENT */
    

/* FRONTMATTER */
    let frontmatter: frontmatter = {}
            try {
                const parsed = matter(content)
                frontmatter = parsed.data
            } catch (error) {frontmatter = {parsed: false}}

/* INLINE PROPERTIES */
    const inlineProperties: InlineProperty[] = []
    const regex = /%%\(([^:]+)::(.*?)\)%%/g;
    for (const match of content.matchAll(regex)) {
        const matchIndex = match.index ?? 0
        const lineNumber = content.substring(0, matchIndex).split('\n').length - 1;
        const priorLine = content.split('\n')[lineNumber - 1]
        const strippedLine = stripAtomFormatting(content.split('\n')[lineNumber - 1])
        const userInput =  match[2].trim()
        const thisInline: InlineProperty = {
            Line: lineNumber,
            FileName: path.basename(filePath, path.extname(filePath)),
            raw: userInput,
            SourceLink: frontmatter.URL,
            PriorLine: priorLine,
            StrippedLine: strippedLine,
            Date: Temporal.Now.plainDateTimeISO(),
            OrdinalDay: "1st",
            Frontmatter: frontmatter
        }
        if (userInput.includes(" | ")) {
            userInput.split(" | ").forEach(pair => {
                let [key, value] = pair.split(": ").map(x => x.trim())
                const parsedValue = propertyParser(thisInline, key, value)
            })
        }
        thisInline.URL = (frontmatter as Record<string, any>)?.URL;
        if (thisInline.Display === "Twitter" || thisInline.Display === "Truth") {
            const contentSection = extractContentSection(content)
            thisInline.Content = contentSection
        }
        if (frontmatter?.["Archive-47"] === true) {
            const linkBase = encodeURIComponent(thisInline.FileName)
            const searchTerms = priorLine.split(/(?<!\b(?:Mr|Mrs|Dr|Sr|Jr|Inc|Co|Ltd|i\.e|e\.g))\.\s/).map((s: string) => encodeURIComponent(s)).join("&text=")
            thisInline.SourceLink = `${linkBase}#:~:text=${searchTerms}`

        } else if (frontmatter?.Paywalled !== false) {
            const searchTerms = priorLine.split(/(?<!\b(?:Mr|Mrs|Dr|Sr|Jr|Inc|Co|Ltd|i\.e|e\.g))\.\s/).map((s: string) => encodeURIComponent(s)).join("&text=")
            thisInline.SourceLink = `${thisInline.URL}#:~:text=${searchTerms}`
        }
        inlineProperties.push(thisInline)
    }
    


    return {
        name: filePath,
        path: filePath,
        frontmatter: frontmatter,
        inlineProperties: inlineProperties,
    }
}
