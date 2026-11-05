// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO(owner): replace with the real production domain once it is registered.
const SITE_URL = 'https://copperdesign.example';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/contact/thanks'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
