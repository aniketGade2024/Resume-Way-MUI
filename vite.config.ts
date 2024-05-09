import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import { fileURLToPath } from 'url';

// ----------------------------------------------------------------------

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
      },
      overlay: {
        initialIsOpen: false,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(fileURLToPath(new URL('./src', import.meta.url))),
      '~': path.resolve(process.cwd(), 'node_modules'),
      src: path.resolve(process.cwd(), 'src'),
    },
  },
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
});
