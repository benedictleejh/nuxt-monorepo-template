import eslintPluginTestingLibrary from 'eslint-plugin-testing-library'

import { defineFlatConfigs } from '../../.nuxt/eslint.config.mjs'

export const testingLibrary = defineFlatConfigs(
  {
    ...eslintPluginTestingLibrary.configs['flat/vue'],
    name: 'nuxt-app/testing-library',
    files: [
      'tests/app/components/**',
      'tests/app/layouts/**',
      'tests/app/pages/**'
    ],
    rules: {
      'testing-library/no-await-sync-events': 'error',
      'testing-library/no-test-id-queries': 'error',
      'testing-library/prefer-explicit-assert': 'error',
      'testing-library/prefer-user-event': 'error'
    }
  }
)
