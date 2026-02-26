// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-username.github.io',
  // If deploying to https://your-username.github.io/RainSite/
  // uncomment the next line:
  // base: '/RainSite',
  build: {
    assets: '_assets',
  },
});
