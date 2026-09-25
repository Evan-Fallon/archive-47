import glob from 'fast-glob';
import fs from 'node:fs/promises';
import pLimit from 'p-limit';
import { atomizeMarkdownFile, type VaultNote } from './atomizeMarkdown';

const vaultpath = import.meta.env.PUBLIC_PATH;
const limit = pLimit(500);

export async function vaultQuery(filter: string): Promise<VaultNote[]> {
  const files = await glob('**/*.md', { cwd: vaultpath, absolute: true });
  const searchFilter = filter.toLowerCase();

  const tasks = files.map((filePath) =>
    limit(async () => {
      const rawfile = await fs.readFile(filePath, 'utf8');
      if (searchFilter && !rawfile.toLowerCase().includes(searchFilter)) {
        return null;
      }
      return atomizeMarkdownFile(rawfile, filePath);
    })
  );

  const results = await Promise.all(tasks);
  return results.filter((note): note is VaultNote => note !== null);
}