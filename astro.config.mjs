// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// Cargar variables de entorno según el modo
// development: .env
// production:  .env.production
const { PUBLIC_SITE_URL } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  'PUBLIC_'
);

const siteUrl = PUBLIC_SITE_URL || 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-PE',
          en: 'en-US',
          pt: 'pt-BR',
          fr: 'fr-FR',
        },
      },
    }),
  ],
  vite: {
    envPrefix: 'PUBLIC_',
  },
});
