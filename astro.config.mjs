// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO(owner): replace with the real production domain once it is registered.
// SITE_URL / BASE_PATH can be overridden at build time (the GitHub Pages workflow sets them).
const SITE_URL = process.env.SITE_URL || 'https://copperdesign.example';
const BASE_PATH = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // TODO(owner): remove the /journal/ exclusion once real articles are published (the page is noindex while empty).
      filter: (page) => !page.includes('/404') && !page.includes('/contact/thanks') && !page.includes('/journal/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
