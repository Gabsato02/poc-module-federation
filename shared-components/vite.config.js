import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

const APPLICATION_PORT = 5003

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
      name: 'shared-components',
      filename: 'sharedComponents.js',
      exposes: {
        './SharedComponent1': './src/components/SharedComponent1.vue', // Expõe os componentes reutilizáveis
        './SharedComponent2': './src/components/SharedComponent2.vue',
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
