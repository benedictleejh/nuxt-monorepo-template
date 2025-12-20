import eslintPluginPlaywright from 'eslint-plugin-playwright'

import { defineFlatConfigs } from '../../.nuxt/eslint.config.mjs'

export const playwright = defineFlatConfigs(
  {
    ...eslintPluginPlaywright.configs['flat/recommended'],
    name: 'nuxt-app/playwright',
    files: [
      'tests/e2e/**'
    ],
    rules: {
      ...eslintPluginPlaywright.configs['flat/recommended'].rules,
      'playwright/no-commented-out-tests': 'error',
      'playwright/no-duplicate-hooks': 'error',
      'playwright/no-get-by-title': 'error',
      'playwright/no-raw-locators': 'error',
      'playwright/no-slowed-test': [
        'error',
        {
          allowConditional: true
        }
      ],
      'playwright/prefer-comparison-matcher': 'error',
      'playwright/prefer-equality-matcher': 'error',
      'playwright/prefer-hooks-in-order': 'error',
      'playwright/prefer-hooks-on-top': 'error',
      'playwright/prefer-lowercase-title': 'error',
      'playwright/prefer-native-locators': 'error',
      'playwright/prefer-locator': 'error',
      'playwright/prefer-strict-equal': 'error',
      'playwright/prefer-to-be': 'error',
      'playwright/prefer-to-contain': 'error',
      'playwright/prefer-to-have-count': 'error',
      'playwright/prefer-to-have-length': 'error',
      'playwright/require-hook': 'error',
      'playwright/require-to-throw-message': 'error',
      'playwright/require-top-level-describe': 'error'
    }
  }
)
