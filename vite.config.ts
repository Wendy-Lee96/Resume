import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages 子路径部署（https://Wendy-Lee96.github.io/Resume/）
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
})
