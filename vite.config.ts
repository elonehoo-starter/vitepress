import path from 'node:path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Component from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

import DevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '~~/': `${path.resolve(__dirname, 'theme')}/`,
    },
  },
  ssr: {
    noExternal: ['mark.js'],
  },
  plugins: [
    Component({
      include: [/\.vue/, /\.md/],
      dirs: [
        '../theme/components',
      ],
      dts: '../components.d.ts',
      directoryAsNamespace: true,
    }),
    AutoImport({
      dirs: [
        '../theme/composables',
      ],
      imports: [
        'vue',
        'vitepress',
        '@vueuse/core',
      ],
      dts: '../auto-imports.d.ts',
    }),
    UnoCSS(),
    DevTools(),
  ],
})
