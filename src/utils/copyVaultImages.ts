import fs from 'node:fs'
import path from 'node:path'

const vaultPath = import.meta.env.VAULT_PATH
const extensions = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.mp4', '.webm', '.ogg'])
const targetSubdirectory = "vault-images"

let vaultImageIndex: Map<string, string> | null = null

function buildVaultImageIndex(): Map<string, string> {
    if (vaultImageIndex) { 
        console.log("index exists") 
        return vaultImageIndex 
    }
    console.log("Building vault image index...")
    vaultImageIndex = new Map()
    function walkDir(dir: string) {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            if (entry.name.startsWith('.')) continue
            const fullPath = path.join(dir, entry.name)
            if (entry.isDirectory()) {
                walkDir(fullPath)
            } else if (extensions.has(path.extname(entry.name).toLowerCase())) {
                const relativePath = path.relative(vaultPath, fullPath).replace(/\\/g, '/')
                vaultImageIndex!.set(entry.name, fullPath)
                vaultImageIndex!.set(relativePath, fullPath)
            }
        }
    }
    if (fs.existsSync(vaultPath)) {
        walkDir(vaultPath)
    } else {
        console.warn(`Vault path does not exist: ${vaultPath}`)
    }
    return vaultImageIndex
}

export function resolveVaultImage(imagePath: string): string { 
    if (/^https?:\/\//.test(imagePath)) {
        return imagePath
    }
    if (!vaultPath) {
        console.warn('Vault path is not defined in environment variables.')
        return imagePath
    }
    const cleanName = imagePath.split('|')[0].trim().replace("[[", "").replace("]]", "")
    const index = buildVaultImageIndex()
    const resolvedPath = index.get(cleanName) || index.get(path.basename(cleanName))
    if (!resolvedPath) {
        console.warn(`Image not found in vault: ${imagePath}`)
        return imagePath
    }
    const fileName = path.basename(resolvedPath)
    const publicDirectory = path.resolve(process.cwd(), 'public', targetSubdirectory)
    const destinationPath = path.join(publicDirectory, fileName)

    copyIfChanged(resolvedPath, destinationPath)

    if (import.meta.env.PROD) { 
        const distDirectory = path.resolve(process.cwd(), 'dist', targetSubdirectory)
        copyIfChanged(resolvedPath, path.join(distDirectory, fileName))
    }
    return `${targetSubdirectory}/${encodeURIComponent(fileName)}`
}
function copyIfChanged(source: string, destination: string) {
    fs.mkdirSync(path.dirname(destination), { recursive: true })
    if (!fs.existsSync(source)) {
        console.warn(`Source file does not exist: ${source}`)
        return
    }
    if (fs.existsSync(destination)) {
        const sourceStat = fs.statSync(source)
        const destStat = fs.statSync(destination)
        if (sourceStat.size === destStat.size && sourceStat.mtimeMs <= destStat.mtimeMs) {
            return // No need to copy, file is unchanged
        }
    }
    fs.copyFileSync(source, destination)
}