import { defineFlatConfigs } from '../../.nuxt/eslint.config.mjs'

export const nuxt = defineFlatConfigs(
  {
    name: 'nuxt-app/nuxt',
    files: [
      '.config/nuxt.*.ts',
      'nuxt.config.*.ts'
    ],
    rules: {
      'nuxt/nuxt-config-keys-order': 'error'
    }
  }
)
