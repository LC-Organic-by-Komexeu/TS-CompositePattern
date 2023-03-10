// vite.config.js
import { defineConfig } from 'vite'
import path from 'node:path';
import glob from 'glob';
import { fileURLToPath } from 'node:url';

export default defineConfig({
    build: {
        //rollupOptions: {
        //    // https://rollupjs.org/guide/en/#big-list-of-options
        //    input: Object.fromEntries(
        //        glob.sync('wwwroot/js/**/*.js').map(file => [
        //            path.relative('wwwroot/js', file.slice(0, file.length - path.extname(file).length)),
        //            fileURLToPath(new URL(file, import.meta.url))
        //        ])
        //    ),
        //    output: {
        //        format: 'es',
        //        dir: 'wwwroot/dist',
        //        entryFileNames: `js/[name].js`,
        //        chunkFileNames: `js/[name].js`,
        //        assetFileNames: `js/[name].[ext]`
        //    }
        //}
    },
    server: {
        hmr: {
            protocol: 'ws'
        }
    }
})
