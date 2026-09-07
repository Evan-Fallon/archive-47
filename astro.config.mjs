// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

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
    fonts: [{
    provider: fontProviders.local(),
    name: "Noto Sans",
    cssVariable: "--font-noto-sans",
    options: {
      variants: [{
        src: ['./src/assets/fonts/NotoSans/NotoSans-Regular.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
})