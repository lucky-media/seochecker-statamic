import { URL, fileURLToPath } from 'url';

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
    },
  },
  plugins: [
    laravel({
      publicDirectory: 'resources/dist',
      input: ['resources/js/sp-pulse.js', 'resources/css/sp-pulse.css'],
    }),
    vue2(),
  ],
});
