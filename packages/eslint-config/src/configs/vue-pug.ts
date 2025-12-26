import type { EslintConfigName, EslintFlatConfigItem } from '~/utils'

import { FlatCompat } from '@eslint/eslintrc'
import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'

const compat = new FlatCompat({ baseDirectory: import.meta.dirname })
const compatConfigs = compat.extends('plugin:vue-pug/vue3-recommended')
const vuePugRules = compatConfigs.map(conf => conf.rules ?? {}).reduce((acc, curr) => Object.assign(acc, curr), {})
const eslintPluginVuePug = compatConfigs.reduce((acc, curr) => Object.assign(acc, curr), {})

export const vuePug = () => defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
  {
    ...eslintPluginVuePug,
    name: 'nuxt-monorepo-template/vue-pug',
    rules: {
      ...vuePugRules
    },
    languageOptions: {
      ...eslintPluginVuePug.languageOptions,
      ecmaVersion: 'latest'
    }
  }
)
