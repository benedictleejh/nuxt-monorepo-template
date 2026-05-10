import type {
  EslintConfigName,
  EslintFlatConfigItem
} from '#eslint-config/utils'

import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

export const unicorn = () => defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
  {
    ...eslintPluginUnicorn.configs.recommended,
    name: 'nuxt-monorepo-template/unicorn',
    rules: {
      ...eslintPluginUnicorn.configs.recommended.rules,
      'unicorn/consistent-destructuring': 'error',
      'unicorn/expiring-todo-comments': 'off',
      'unicorn/prefer-import-meta-properties': 'error',
      'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-empty-file': 'off',
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-useless-undefined': 'off'
    }
  },
  {
    name: 'nuxt-monorepo-template/unicorn/filename-convention/components',
    files: [
      '**/app/components/**'
    ],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'pascalCase'
        }
      ]
    }
  },
  {
    name: 'nuxt-monorepo-template/unicorn/filename-convention/composables',
    files: [
      '**/app/composables/**'
    ],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'camelCase'
        }
      ]
    }
  },
  {
    name: 'nuxt-monorepo-template/unicorn/filename-convention/default',
    files: [
      '**/app/assets/**',
      '**/app/layouts/**',
      '**/app/middleware/**',
      '**/app/pages/**',
      '**/app/plugins/**',
      '**/app/utils/**',

      '**/content/**',
      '**/scripts/**',

      '**/server/api/**',
      '**/server/middleware/**',
      '**/server/plugins/**',
      '**/server/routes/**',
      '**/server/utils/**',

      '**/shared/types/**',
      '**/shared/utils/**',

      'tests/e2e/**',
      'tests/features/**',
      'tests/mocks/**',
      'tests/utils/**'
    ],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase'
        }
      ]
    }
  }
)
