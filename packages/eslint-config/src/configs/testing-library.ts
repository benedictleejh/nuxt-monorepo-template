import type { EslintConfigName, EslintFlatConfigItem } from '~/utils'

import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library'

export const testingLibrary = () => defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
  {
    ...eslintPluginTestingLibrary.configs['flat/vue'],
    name: 'nuxt-monorepo-template/testing-library',
    files: [
      '**/tests/app/components/**',
      '**/tests/app/layouts/**',
      '**/tests/app/pages/**'
    ],
    rules: {
      ...eslintPluginTestingLibrary.configs['flat/vue'].rules,
      'testing-library/no-await-sync-events': 'error',
      'testing-library/no-test-id-queries': 'error',
      'testing-library/prefer-explicit-assert': 'error',
      'testing-library/prefer-implicit-assert': 'off',
      'testing-library/prefer-query-matchers': [
        'error',
        {
          validEntries: [
            {
              query: 'get',
              matcher: 'toBeDefined'
            }
          ]
        }
      ],
      'testing-library/prefer-user-event': 'error',

      // Not applicable to @testing-library/vue
      'testing-library/consistent-data-testid': 'off',
      'testing-library/no-unnecessary-act': 'off'
    }
  }
)
