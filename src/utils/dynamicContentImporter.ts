export async function dynamicContentImporter( atomList: any[] ) {
    const neededComponents = new Set<string>()
    for (const atom of atomList) {
        if (atom?.inlineProperties.length) {
            for (const prop of atom.inlineProperties) {
                neededComponents.add(prop?.Display)
            }
        }
    }
console.log(neededComponents)
    const components: Record<string, any> = {};
    const disMap = new Map()
    disMap.set("Basic", "NodeBasic")
    disMap.set("Minor", "NodeMinor")
    for (const type of neededComponents) {
        components[type] = await import `${disMap.get(type)}` from `../components/${disMap[type]}`
    }
}