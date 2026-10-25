import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

function processWikiLinks(content: string): string {
  return content.replace(/!?\[\[(.*?)\]\]/g, (match, wikilinkContent) => {
    const isEmbed = match.startsWith('![');
    const supportedImages = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'];
    const supportedVideos = ['.mp4', '.webm', '.ogg'];
    const parts = wikilinkContent.split('|')
    const linkTarget = parts[0].trim()
    const linkText = parts[1] ? parts[1].trim() : linkTarget;
    if (isEmbed && supportedVideos.some((ext) => linkTarget.endsWith(ext))) {
      return `<video controls>
                <source src="videos/${linkTarget}" type="video/mp4">
              </video>`
    } else if (isEmbed && supportedImages.some((ext) => linkTarget.endsWith(ext))) {
      return `<img src="images/${linkTarget}" style="width: ${linkText}px;" alt="${linkText}" />`
    }
    return `<a href="${linkTarget}">${linkTarget}</a>`
  })
}
function convertCallouts(htmlString: string): string {
  const pattern = /<blockquote>\s*<p>\[!([\w-]+)\]([\s\S]*?)<\/p>\s*<\/blockquote>/gi;

  return htmlString.replace(pattern, (match, type, innerContent) => {
    const classType = type.toLowerCase();
    
    const convertedContent = innerContent
      .trim();

    return `<blockquote class="${classType}">\n${convertedContent}\n</blockquote>`;
  });
}


export async function markdownToHtmlPlus(string: string): Promise<string> {
  const strippedString = string.split('\n').filter(line => !line.trim().startsWith('%%(inline')).join('\n');
    const htmlContent = String(
        await unified()
          .use(remarkParse)
          .use(remarkGfm)      
          .use(remarkRehype)
          .use(rehypeStringify)
          .process(strippedString)
      )
        /* FOOTNOTES */
        /* OBSIDIAN COMMENTS   */
        .replace(/<p>\s*%%[\s\S]*?%%\s*<\/p>|%%[\s\S]*?%%/g, '')

    return processWikiLinks(convertCallouts(htmlContent))
    
}
/* OBSIDIAN COMMENTS   
.replace(/<p>\s*%%[\s\S]*?%%\s*<\/p>|%%[\s\S]*?%%/g, '')
/* FOOTNOTES 
.replace(/\[\^\d+\]/g, '')
/* BLOCK ID 
.replace(/\^[a-zA-Z0-9-]+/g, '')
/* HTML TAGS 
.replace(/<[a-z]>/, "") */