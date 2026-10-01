import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset paths working on GitHub Pages, Netlify, Vercel, etc.
export default defineConfig({
  base: './',
  plugins: [react()],
});
