// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://eaglesunitedwfc.co.uk',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
});
