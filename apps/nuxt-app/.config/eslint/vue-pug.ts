import { FlatCompat } from '@eslint/eslintrc'

import { defineFlatConfigs } from '../../.nuxt/eslint.config.mjs'

const compat = new FlatCompat({ baseDirectory: import.meta.dirname })
const compatConfigs = compat.extends('plugin:vue-pug/vue3-recommended')
const vuePugRules = compatConfigs.map(conf => conf.rules ?? {}).reduce((acc, curr) => Object.assign(acc, curr), {})
const eslintPluginVuePug = compatConfigs.reduce((acc, curr) => Object.assign(acc, curr), {})

export const vuePug = defineFlatConfigs(
  {
    ...eslintPluginVuePug,
    name: 'nuxt-app/vue-pug',
    rules: {
      ...vuePugRules
    },
    languageOptions: {
      ...eslintPluginVuePug.languageOptions,
      ecmaVersion: 'latest'
    }
  }
)
