import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  //部署到github  base:"/JiZhang-demo/dist/",
  plugins: [vue()]
})
