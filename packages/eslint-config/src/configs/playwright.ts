import type { EslintConfigName, EslintFlatConfigItem } from '#eslint-config/utils'

import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'
import eslintPluginPlaywright from 'eslint-plugin-playwright'

import { upgradeWarnConfigRulesToError } from '#eslint-config/utils'

export const playwright = () => defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
  {
    ...eslintPluginPlaywright.configs['flat/recommended'],
    name: 'nuxt-monorepo-template/playwright',
    files: [
      '**/tests/e2e/**'
    ],
    rules: {
      ...upgradeWarnConfigRulesToError(eslintPluginPlaywright.configs['flat/recommended'].rules ?? {}),
      'playwright/max-expects': 'off',
      'playwright/no-commented-out-tests': 'error',
      'playwright/no-duplicate-hooks': 'error',
      'playwright/no-get-by-title': 'error',
      'playwright/no-hooks': 'off', // Allow hooks to setup things as necessary
      'playwright/no-nth-methods': 'error',
      'playwright/no-raw-locators': 'error',
      'playwright/no-restricted-locators': [
        'error',
        []
      ],
      'playwright/no-restricted-matchers': [
        'error',
        {
          toBeFalsy: 'Use `toBe(false)` instead.',
          toBeTruthy: 'Use `toBe(true)` instead.',
          toEqual: 'Use `toStrictEqual` instead.'
        }
      ],
      'playwright/no-restricted-roles': [
        'error',
        []
      ],
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
      'playwright/require-soft-assertions': 'off', // Workflow-dependent, change as needed
      'playwright/require-tags': 'off', // Workflow-dependent, change as needed
      'playwright/require-to-pass-timeout': 'error',
      'playwright/require-to-throw-message': 'error',
      'playwright/require-top-level-describe': 'error'
    }
  }
)
