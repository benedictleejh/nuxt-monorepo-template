import type { EslintConfigName, EslintFlatConfigItem } from '~/utils'

import eslintPluginJs from '@eslint/js'
import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'
import globals from 'globals'

export const javascript = () => defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
  {
    name: 'nuxt-monorepo-template/javascript',
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.builtin, // Equivalent of emcaVersion: 'latest'
        ...globals.node,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',

        // This is technically not a global function, but it's a common practice in nuxt.config.ts,
        // We include it here to avoid false positives.
        defineNuxtConfig: 'readonly'
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      ...eslintPluginJs.configs.all.rules,
      'no-inner-declarations': 'off', // Not needed for ESM

      'arrow-body-style': [
        'error',
        'as-needed'
      ],
      'capitalized-comments': 'off',
      'complexity': [
        'error',
        {
          max: 10
        }
      ],
      'consistent-return': 'off',
      'curly': [
        'error',
        'all'
      ],
      'func-names': [
        'error',
        'as-needed'
      ],
      'grouped-accessor-pairs': [
        'error',
        'getBeforeSet',
        {
          enforceForTSTypes: true
        }
      ],
      'id-denylist': 'off',
      'id-length': 'off',
      'id-match': 'off',
      'max-depth': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-nested-callbacks': 'off',
      'max-statements': 'off',
      'no-implicit-globals': 'off', // All declarations are module-scoped in ESM
      'no-inline-comments': 'off',
      'no-magic-numbers': [
        'error',
        {
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          ignoreClassFieldInitialValues: true,
          enforceConst: true,
          detectObjects: false,
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
          ignoreReadonlyClassProperties: true,
          ignoreTypeIndexes: true
        }
      ],
      'no-nested-ternary': 'off',
      'no-restricted-exports': 'off',
      'no-restricted-globals': 'off',
      'no-restricted-imports': 'off',
      'no-restricted-properties': 'off',
      'no-restricted-syntax': 'off',
      'no-ternary': 'off',
      'no-undef-init': 'off',
      'no-undefined': 'off',
      'no-underscore-dangle': 'off',
      'no-void': 'off',
      'no-warning-comments': 'off',
      'one-var': 'off',
      'operator-assignment': 'off',
      'radix': ['error', 'as-needed'],
      'sort-keys': 'off',
      'sort-vars': 'off'
    }
  },
  {
    name: 'nuxt-monorepo-template/javascript/config-files-overrides',
    files: [
      '**/*.config.*',
      '**/.config/**'
    ],
    rules: {
      'no-magic-numbers': 'off'
    }
  },
  {
    name: 'nuxt-monorepo-template/javascript/scripts-override',
    files: [
      '**/scripts/**'
    ],
    rules: {
      'no-console': 'off'
    }
  }
)
