import type { EslintConfigName, EslintFlatConfigItem } from '../utils'

import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'
import vueAccessibilityEslintPlugin from 'eslint-plugin-vuejs-accessibility'
import globals from 'globals'

import { getRulesFromEslintConfig } from '../utils'

import { vueEslintParser } from './vue'

const fixedConfig = await defineFlatConfigs(...vueAccessibilityEslintPlugin.configs['flat/recommended']).renamePlugins({
  'vuejs-accessibility': 'vue-accessibility'
})

const vueAccessibilityRules = getRulesFromEslintConfig(fixedConfig)

export const vueAccessibility = () => defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
  {
    name: 'nuxt-monorepo-template/vue-accessibility',
    files: ['*.vue', '**/*.vue'],
    plugins: {
      'vue-accessibility': vueAccessibilityEslintPlugin
    },
    languageOptions: {
      parser: vueEslintParser,
      sourceType: 'module',
      globals: globals.browser
    },
    rules: {
      ...vueAccessibilityRules,
      'vue-accessibility/no-aria-hidden-on-focusable': 'error',
      'vue-accessibility/no-role-presentation-on-focusable': 'error'
    }
  }
)
