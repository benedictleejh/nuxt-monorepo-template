import eslintPluginUnicorn from 'eslint-plugin-unicorn'

import { defineFlatConfigs } from '../../.nuxt/eslint.config.mjs'

export const unicorn = defineFlatConfigs(
  {
    ...eslintPluginUnicorn.configs.recommended,
    name: 'nuxt-app/unicorn',
    rules: {
      ...eslintPluginUnicorn.configs.recommended.rules,
      'unicorn/consistent-destructuring': 'error',
      'unicorn/expiring-todo-comments': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/prefer-import-meta-properties': 'error',
      'unicorn/no-useless-undefined': 'off', // Due to conflict with Vue computed properties requiring a return value
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-empty-file': 'off',
      'unicorn/no-array-reduce': 'off'
    }
  },
  {
    name: 'nuxt-app/unicorn/filename-convention/components',
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
    name: 'nuxt-app/unicorn/filename-convention/composables',
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
    name: 'nuxt-app/unicorn/filename-convention/default',
    files: [
      '**/app/assets/**',
      '**/app/layouts/**',
      '**/app/middleware/**',
      '**/app/pages/**',
      '**/app/plugins/**',
      '**/app/utils/**',

      'content/**',
      'scripts/**',

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
