import glob from 'fast-glob'
import fs from 'node:fs'
import path from 'node:path';
import matter from 'gray-matter'
import { getOrdinal } from './getOrdinal';


import { atomizeMarkdownFile, type InlineProperty, type VaultNote} from './atomizeMarkdown';

const vaultpath = import.meta.env.PUBLIC_PATH

export async function vaultQuery(): Promise<VaultNote[]> {
    const files = await glob('**/*.md', { cwd: vaultpath, absolute: true });
    const mapped = files.map(file => {
        const rawfile = fs.readFileSync(file, 'utf8');
        return atomizeMarkdownFile(rawfile, file)
    })
    return mapped
}