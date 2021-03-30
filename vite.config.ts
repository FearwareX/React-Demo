import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: './',
  resolve: {
    alias: [
      { find: '~', replacement: resolve(__dirname, './') }, // 配置别名
      { find: '@', replacement: resolve(__dirname, './src') }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        lessOptions: {
          modifyVars: {
            // 通过hack方式覆盖组件库样式
            hack: `true; @import "./src/assets/style.less"`
          }
        }
      }
    }
  },
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`
        }
      ]
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  esbuild: {
    jsxInject: `import React,{ FC } from 'react'`
  }
});
