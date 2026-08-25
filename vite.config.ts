import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from 'tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
});