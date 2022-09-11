import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteSingleFile } from 'vite-plugin-singlefile';

import { resolve } from 'path'; 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), viteSingleFile()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
