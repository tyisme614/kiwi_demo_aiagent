import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['localhost', 'ai.kiwitech.net.cn'],
    host: '0.0.0.0',
    port: 9999
  }
})
