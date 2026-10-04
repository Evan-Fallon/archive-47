import glob from 'fast-glob';
import fs from 'node:fs/promises';
import pLimit from 'p-limit';
import path from 'node:path' 
import matter from 'gray-matter'
import { Temporal } from '@js-temporal/polyfill'

export interface InlineProperty {
  Line: number;
  Name: string;
  Series?: string;
  FileName: string;
  SourceLink: string
  raw: string;
  PriorLine: string;
  Date: Temporal.PlainDateTime;
  DateString: string;
  OrdinalDay: string;
  Display: string;
  DisplayImage?: string;
  Frontmatter: any;
  [key: string]: any;
}

export interface VaultNote {
  Path: string;
  Frontmatter: any;
  FileContent: string;
  BaseName: string;
  inlineProperties: InlineProperty[];
}

const vaultpath = import.meta.env.VAULT_PATH;
const limit = pLimit(500);

let cachedQuery: Promise<VaultNote[]> | null = null

export async function vaultQuery(): Promise<VaultNote[]> {

  if (cachedQuery) {
    console.log("cached already")
    return cachedQuery
  }

  const files = await glob('**/*.md', { cwd: vaultpath, absolute: true });

  const tasks = files.map((filePath) =>
    limit(async () => {
      const rawfile = await fs.readFile(filePath, 'utf8');
      let frontmatter: any = {}
          try {
              const parsed = matter(rawfile)
              frontmatter = parsed.data
          } catch (error) {frontmatter = {parsed: false}}
      return { 
        Path: filePath, 
        Frontmatter: frontmatter,
        FileContent: rawfile, 
        BaseName: path.basename(filePath, path.extname(filePath)), 
        inlineProperties: []
      } as VaultNote
    })
  );
  cachedQuery = Promise.all(tasks)
  const results = await cachedQuery
  console.log("initial cache")
  return results;
}