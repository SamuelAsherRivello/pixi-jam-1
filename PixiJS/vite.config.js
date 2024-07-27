import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'public/index.html'),
      },
      output: {
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name].[hash][extname]`;
          }
          if (/mp3|wav/i.test(extType)) {
            return `assets/audio/[name].[hash][extname]`;
          }
          return `assets/[ext]/[name].[hash][extname]`;
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@client': path.resolve(__dirname, 'src/scripts/client'),
      '@server': path.resolve(__dirname, 'src/scripts/server'),
      '@shared': path.resolve(__dirname, 'src/scripts/shared'),
    },
  },
  optimizeDeps: {
    include: ['events'],
  },
});
