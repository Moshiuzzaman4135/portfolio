import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const basePath = process.env.BASE_PATH ?? '/';

console.log(">>> BUILD BASE_PATH =", process.env.BASE_PATH);

// https://vitejs.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
