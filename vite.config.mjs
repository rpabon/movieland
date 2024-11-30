import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react-swc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.jsx'],
    css: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    threads: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
