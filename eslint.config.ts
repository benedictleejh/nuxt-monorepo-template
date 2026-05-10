import { createEslintConfig } from '@nuxt-monorepo-template/eslint-config'

export default createEslintConfig({
  features: {
    playwright: false,
    vue: false
  }
})
