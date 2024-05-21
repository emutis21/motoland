import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
    cors: true,
  },
  base: '/',
  define: {
    __API_MOTOLAND_MOTOS__: JSON.stringify(process.env.VITE_API_MOTOLAND_MOTOS),
    __API_MOTOLAND__: JSON.stringify(process.env.VITE_API_MOTOLAND),
  }
})
