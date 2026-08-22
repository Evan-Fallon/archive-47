import glob from 'fast-glob'
import fs from 'node:fs'
import path from 'node:path';
import matter from 'gray-matter'


const vaultpath = import.meta.env.PUBLIC_PATH

export interface InlineProperty {
    Line: number;
    Path: string;
    raw: string;
    PriorLine: string;
    URL: string;
    [key: string]: any;
}

export interface VaultNote {
  name: string;
  frontmatter: Record<string, any>;
  inlineProperties: InlineProperty[];
}
export async function getVar(): Promise<VaultNote[]> {
    const files = await glob('**/*.md', { cwd: vaultpath, absolute: true });
    const mapped = files.map(file => {
        const rawfile = fs.readFileSync(file, 'utf8');
        let frontmatter = {}
        try {
            const parsed = matter(rawfile)
            frontmatter = parsed.data
        } catch (error) {frontmatter = "FAILED"}

        const inlineProperties: InlineProperty[] = []
        const regex = /%%\(([^:]+)::(.*?)\)%%/g;
        for (const match of rawfile.matchAll(regex)) {
            const matchIndex = match.index ?? 0
            const lineNumber = rawfile.substring(0, matchIndex).split('\n').length - 1;
            const priorLine = rawfile.split('\n')[lineNumber - 1]
            const userInput =  match[2].trim()
            const propEntry: InlineProperty = {
                Line: lineNumber,
                Path: file,
                URL: frontmatter.URL,
                raw: userInput,
                PriorLine: priorLine,
            }
            if (userInput.includes(" | ")) {
                    userInput.split(" | ").forEach(pair => {
                        const [key, value] = pair.split(": ").map(x => x.trim())
                        if (key) propEntry[key] = value ?? ''
                    })
            }
            inlineProperties.push(propEntry)
        }

        return {
            name: path.basename(file, '.md'),
            frontmatter: frontmatter,
            inlineProperties: inlineProperties
        }
    })

    return mapped
}