import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/wp-json': {
                target: 'https://seusite.com',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
