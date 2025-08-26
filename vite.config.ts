import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/texas/', // <-- Add this line
  plugins: [react()],
})
