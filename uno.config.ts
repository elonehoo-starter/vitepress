import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

export default defineConfig({
  rules: [
    [/^scrollbar-hide$/, ([_]) => {
      return `
      .scrollbar-hide{ scrollbar-width:none }
      .scrollbar-hide::-webkit-scrollbar{ display:none }`
    }],
    [/^scrollbar-default$/, ([_]) => {
      return `
      .scrollbar-default{ scrollbar-width:auto }
      .scrollbar-default::-webkit-scrollbar{ display:block }`
    }],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetAnimations(),
    presetIcons(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
