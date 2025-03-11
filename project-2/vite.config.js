import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

const APPLICATION_PORT = 5002

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: false,
    cssCodeSplit: false,
    target: 'esnext',
  },
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
      name: 'project2',
      filename: 'project2.js', // Define o nome do arquivo do bundle
      exposes: {
        './App': './src/App.vue', // Define quais os pontos de entrada expostos na aplicação
      },
      shared: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
