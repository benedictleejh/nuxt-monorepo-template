import type { EslintFlatConfigItem } from '~/utils'

import { defineFlatConfig } from 'eslint-flat-config-utils'

const configOverrides = () => [
  defineFlatConfig<EslintFlatConfigItem>(
    {
      name: 'nuxt/sort-config',
      files: [
        '**/.config/nuxt?(.*).?([cm])[jt]s?(x)',
        '**/nuxt.config?(.*).?([cm])[jt]s?(x)'
      ],
      rules: {
        'nuxt/nuxt-config-keys-order': 'error'
      }
    }
  )
]

export const nuxtOverrides = () => {
  const overrides: [string, () => EslintFlatConfigItem][]
    = configOverrides().map(config => [config.name ?? '', () => config])

  return Object.fromEntries(overrides)
}
