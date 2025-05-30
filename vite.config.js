import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'BoiPoka',
        short_name: 'BoiPoka',
        description: 'An eBook reader',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'logo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'screenshots/desktop.png',
            type: 'image/png',
            sizes: '1200x800',
            form_factor: 'wide'
          },
          {
            src: 'screenshots/small.png',
            type: 'image/png',
            sizes: '600x800',
            form_factor: 'narrow'
          }
        ],
      },
    }),
  ],
});
