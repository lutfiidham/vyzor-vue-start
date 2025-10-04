import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? ''  : '';  // Production BasePath /laravelvue/vyzor/preview

export default defineConfig({
    base: basePath,
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
    css: {
        url: false,
        preprocessorOptions: {
            scss: {
                // Injects a SCSS variable with the base URL
                additionalData: `$base-url: '${basePath}';`,
            },
        },
    },
    define: {
        __BASE_PATH__: JSON.stringify(basePath) // Set base URL here : "/laravelvue/vyzor/preview"
    },
});
