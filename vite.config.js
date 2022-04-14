import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  mode: "development",
  publicDir: "./public",
  build:{
    outDir: "./build"
  }

})
