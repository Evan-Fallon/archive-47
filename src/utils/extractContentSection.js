import { Marked } from "marked"

function convertCallouts(htmlString) {
  const pattern = /<blockquote>\s*<p>\[!([\w-]+)\]([\s\S]*?)<\/p>\s*<\/blockquote>/gi;

  return htmlString.replace(pattern, (match, type, innerContent) => {
    const classType = type.toLowerCase();
    
    // Convert all wiki-style images ![[filename]] into <img> tags
    const convertedContent = innerContent
      .replace(/!\[\[(.*?)\]\]/g, (m, fileName) => `<img src="image/${fileName.trim()}">`)
      .trim();

    return `<blockquote class="${classType}">\n${convertedContent}\n</blockquote>`;
  });
}
export function extractContentSection(markdown) {
	const lines = markdown.split(/\r?\n/)
	const contentHeaderIndex = lines.findIndex(line => /^# Content\s*$/.test(line.trim()))

	if (contentHeaderIndex === -1) {
		return ''
	}

	const nextSectionIndex = lines.slice(contentHeaderIndex + 1)
		.findIndex(line => /^#\s+/.test(line.trim()))

	const contentEndIndex = nextSectionIndex === -1
		? lines.length
		: contentHeaderIndex + 1 + nextSectionIndex

	const initialString = lines.slice(contentHeaderIndex + 1, contentEndIndex).join('\n').trim()
	let output = new Marked().parse(initialString)
	/* REMOVE INLINES */
	output = output.replace(/%%[\s\S]*?%%/g, '').trim();
	/* REPLACE IMGS WIKILINKS*/
	output = output.replace(/!\[\[(.*?)\]\]/g, '<img src="images/$1"/>');
	output = convertCallouts(output)
	return output
}
