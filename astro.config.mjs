// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  build: {
      format: 'file'
  },

  vite: {
      build: {
      assetsInlineLimit: 20240, 
      },
  },

  integrations: [icon()]
})