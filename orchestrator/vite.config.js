import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

const APPLICATION_PORT = 5000;

// https://vite.dev/config/
export default defineConfig({
  preview: {
    port: APPLICATION_PORT,
  },
  server: {
    port: APPLICATION_PORT,
  },
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'orchestrator',
      remotes: {
        // Define quais microfrontends serão rodados no host
        project1: 'http://localhost:5001/assets/project1.js',
        project2: 'http://localhost:5002/assets/project2.js',
        sharedComponents: 'http://localhost:5003/assets/sharedComponents.js',
      },
      shared: ['vue'], // Define dependências compartilhadas
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
