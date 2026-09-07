// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file'
    },
    vite: {
        build: {
        assetsInlineLimit: 10240, 
        },
    }
})