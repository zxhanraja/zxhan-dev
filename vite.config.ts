import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // 'process.env': {} // Removed to allow proper env var usage
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  server: {
    port: 3000
  }
});