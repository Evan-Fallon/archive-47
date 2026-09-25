export function stripAtomFormatting(string: string): string {
    let output
    output = string
    /* OBSIDIAN COMMENTS */    
        .replace(/<p>\s*%%[\s\S]*?%%\s*<\/p>|%%[\s\S]*?%%/g, '')
    /* FOOTNOTES */
        .replace(/\[\^\d+\]/g, '')
    /* BLOCK ID */
        .replace(/\^[a-zA-Z0-9-]+/g, '')
    /* HTML TAGS */
        .replace(/<[a-z]>/, "")
    return output
}