// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// Cargar variables de entorno según el modo
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
  image: {
    // Optimizar imágenes automáticamente en build
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    // Dominios remotos permitidos para imágenes externas
    domains: ['ibb.co', 'i.ibb.co', 'images.unsplash.com'],
    // Tamaños de imagen para el atributo srcset
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
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
