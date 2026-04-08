import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: './public',
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
          const assetName = assetInfo.name ?? '';
          const extType = path.extname(assetName).slice(1).toLowerCase();

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name].[hash][extname]`;
          }
          if (/mp3|wav/i.test(extType)) {
            return `assets/audio/[name].[hash][extname]`;
          }
          if (extType) {
            return `assets/${extType}/[name].[hash][extname]`;
          }
          return `assets/misc/[name].[hash][extname]`;
        },
      },
    },
  },
  server: {
    port: 3000,
    fs: {
      allow: ['..'],
    },
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