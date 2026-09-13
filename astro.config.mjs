// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mihnk.org',

  build: {
    // 'preserve' keeps the source layout, so `[locale]/404.astro` emits
    // `/tr/404.html` — the file Cloudflare Pages serves for `/tr/*` misses.
    format: 'preserve',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr', 'sv'],
    routing: {
      // The default locale stays at `/`, the others get a `/tr/`, `/sv/` prefix.
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', tr: 'tr', sv: 'sv' },
      },
    }),
  ],
});
