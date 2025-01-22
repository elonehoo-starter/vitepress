import type { Config as ThemeConfig } from '../../src'
import { mergeConfig } from 'vite'
import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '../../src/vitepress/config/baseConfig'

import ViteConfig from '../../vite.config'

export default defineConfigWithTheme<ThemeConfig>({

  extends: baseConfig,

  vite: mergeConfig(ViteConfig, {}),

  srcDir: 'content',

  outDir: './dist',

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    headers: {
      level: [2, 3],
    },
    image: {
      lazyLoading: true,
    },
  },

  themeConfig: {

    search: {
      provider: 'local',
    },
  },
})
