import type { EslintConfigName, EslintFlatConfigItem } from '#eslint-config/utils'

import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'
import eslintPluginVuePug from 'eslint-plugin-vue-pug'

import { upgradeWarnConfigRulesToError } from '#eslint-config/utils'

const vuePugRules =
  eslintPluginVuePug.configs['flat/recommended']
    .map(conf => conf.rules ?? {})
    .reduce((acc, curr) => Object.assign(acc, curr), {})

export const vuePug = () => defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
  {
    name: 'nuxt-monorepo-template/vue-pug',
    files: ['*.vue', '**/*.vue'],
    plugins: {
      'vue-pug': eslintPluginVuePug
    },
    languageOptions: {
      parserOptions: {
        templateTokenizer: {
          pug: 'vue-eslint-parser-template-tokenizer-pug'
        }
      }
    },
    rules: {
      ...upgradeWarnConfigRulesToError(vuePugRules),
      'vue-pug/component-name-in-template-casing': ['error', 'PascalCase']
    }
  }
)
