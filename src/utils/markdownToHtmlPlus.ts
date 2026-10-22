import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHtmlPlus(string: string): Promise<string> {
    const htmlContent = String(
        await unified()
          .use(remarkParse)
          .use(remarkGfm)      
          .use(remarkRehype)
          .use(rehypeStringify)
          .process(string)
      ).replace(/\^(?!\[\d+\])[a-zA-Z0-9-]+/g, '');

    return htmlContent
}
/* OBSIDIAN COMMENTS   
.replace(/<p>\s*%%[\s\S]*?%%\s*<\/p>|%%[\s\S]*?%%/g, '')
/* FOOTNOTES 
.replace(/\[\^\d+\]/g, '')
/* BLOCK ID 
.replace(/\^[a-zA-Z0-9-]+/g, '')
/* HTML TAGS 
.replace(/<[a-z]>/, "") */