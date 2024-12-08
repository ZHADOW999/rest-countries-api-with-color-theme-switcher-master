import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // You can add custom configuration here
  build: {
    // Example: specify output directory
    outDir: 'dist',
  },
  // If you need to alias paths or configure plugins, you can do it here
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
