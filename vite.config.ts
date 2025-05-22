import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('https://std-backend.vercel.app'),
    __PROJECT__: JSON.stringify('frontend'),
  },
});
