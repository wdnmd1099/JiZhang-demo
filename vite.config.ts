import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' //vue支持jsx的插件

// https://vitejs.dev/config/
export default defineConfig({
  //部署到github  base:"/JiZhang-demo/dist/",
  plugins: [
    vue(),
    vueJsx({
      transformOn:true,
      mergeProps:true,
    })
  ]
})
