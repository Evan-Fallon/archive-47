export function extractContentSelection( pageContent ) {
    const contentHeader = pageContent.find(line => line.includes("# Content"))
    return contentHeader
}