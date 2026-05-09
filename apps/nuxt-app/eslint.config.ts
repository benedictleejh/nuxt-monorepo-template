import { createNuxtEslintConfig } from '@nuxt-monorepo-template/eslint-config'

import withNuxt from './.nuxt/eslint.config.mjs'

export default createNuxtEslintConfig(withNuxt())
