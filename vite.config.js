import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/pfs': {
        target: 'https://profile-api.pump.fun',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pfs/, ''),
        headers: {
          Origin: 'https://pump.fun',
          Referer: 'https://pump.fun/'
        }
      }
    }
  }
})

