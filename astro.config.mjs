// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://g3rbinson.github.io',
  base: '/RainSite/',
  build: {
    assets: '_assets',
  },
});
