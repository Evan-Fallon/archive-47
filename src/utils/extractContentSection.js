import { Marked } from "marked"

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

	return initialString
}
