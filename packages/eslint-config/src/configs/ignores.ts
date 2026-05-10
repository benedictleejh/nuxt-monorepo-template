import type { EslintConfigName, EslintFlatConfigItem } from '#eslint-config/utils'

import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'

export const ignores = () => defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
  {
    name: 'nuxt-monorepo-template/global-ignores',
    ignores: [
      '**/dist',
      '**/node_modules',
      '**/.nuxt',
      '**/.output',
      '**/.vercel',
      '**/.netlify',
      '**/public'
    ]
  }
)
