import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://finsiva.com',
  integrations: [sitemap({
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: new Date(),
    filter: (page) => !page.includes('/405/'),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
