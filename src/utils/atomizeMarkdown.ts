import matter from 'gray-matter'
import { Temporal } from '@js-temporal/polyfill'
import { propertyParser } from './propertyParser';
import { extractContentSection } from './extractContentSection';
import { stripAtomFormatting } from './stripAtomFormatting';


export interface frontmatter {
    [key: string]: any;
    Series?: string;
}

export interface InlineProperty {
    Line: number;
    Series?: string;
    Path: string;
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
  frontmatter: Record<string, any>;
  inlineProperties: InlineProperty[];
  content?: any;
}

export function atomizeMarkdownFile(content: string, fileName: string): VaultNote {

/* CONTENT */
    const contentSection = extractContentSection(content)

/* FRONTMATTER */
    let frontmatter: frontmatter = {}
            try {
                const parsed = matter(content)
                frontmatter = parsed.data
            } catch (error) {frontmatter = {parsed: false}}
    if(frontmatter?.["Archive-47"]) {
        console.log("atomize", frontmatter["Archive-47"])
    }

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
            Path: fileName,
            raw: userInput,
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
            thisInline.Content = contentSection
        }
        inlineProperties.push(thisInline)
    }
    


    return {
        name: fileName,
        frontmatter: frontmatter,
        inlineProperties: inlineProperties,
        content: contentSection
    }
}
