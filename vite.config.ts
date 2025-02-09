import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Perry_linktree/',  // <--- Add this line
  plugins: [react()],
})
