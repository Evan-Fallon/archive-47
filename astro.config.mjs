// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file'
    },
    vite: {
        build: {
        // Set the threshold in bytes. For example, 10240 bytes = 10kB
        // Set to 0 to completely disable inlining and force separate files
        assetsInlineLimit: 10240, 
        },
    },
    site: 'https://Evan-Fallon.github.io',
    base: '/archive-47/'
})