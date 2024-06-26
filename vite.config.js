import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import viteSass from 'vite-plugin-sass';
import viteTs from 'vite-plugin-typescript';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/sass/app.sass', 'resources/ts/app.ts'],
            refresh: true,
        }),
        viteSass(),
        viteTs()
    ],
});
