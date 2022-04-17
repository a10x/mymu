import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    eslintPlugin(
      {
        include: "./src/"
      }
    )],
  mode: "development",
  publicDir: "./public",
  jsx:{
    factory: "h",
    fragment: "Fragment"
  },
  build:{
    outDir: "./build",
    minify: false
  }

})
