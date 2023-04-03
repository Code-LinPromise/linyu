import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
// @ts-nocheck
import { svgstore } from "./src/vite_plugins/svgstore";
import styleImport, { VantResolve } from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
    vueJsx({
      transformOn:true,
      mergeProps:true
    }),
    svgstore(),
  ],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://47.109.69.126:3000/',
      }
    }
  }
})


