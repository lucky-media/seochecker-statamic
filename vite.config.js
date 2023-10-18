import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue2 from '@vitejs/plugin-vue2'

export default defineConfig({
    plugins: [
        laravel({
            publicDirectory: 'resources/dist',
            input: ['resources/js/cp.js'],
        }),
        vue2(),
    ],
})
