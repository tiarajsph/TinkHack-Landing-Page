import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Corrected configuration for GitHub Pages deployment
export default defineConfig({
  
  base: './', 
  plugins: [react()],
})