import {
  playwright,
  vuePug,
  vitest,
  typescript,
  unicorn,
  stylistic,
  javascript,
  imports,
  nuxt,
  vue,
  testingLibrary
} from './.config/eslint'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  javascript,
  typescript,
  vue,
  vuePug,
  unicorn,
  imports,
  stylistic,
  nuxt,
  playwright,
  vitest,
  testingLibrary
)
