import type { EslintConfigName, EslintFlatConfigItem } from '../utils'

import eslintPluginVitest from '@vitest/eslint-plugin'
import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'

import { upgradeWarnConfigRulesToError } from '../utils'

const vitestRules = upgradeWarnConfigRulesToError(eslintPluginVitest.configs.all.rules)

export const vitest = () => defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
  {
    name: 'nuxt-monorepo-template/vitest',
    plugins: {
      vitest: eslintPluginVitest
    },
    files: [
      '**/tests/**'
    ],
    ignores: [
      '**/tests/e2e/**'
    ],
    rules: {
      ...vitestRules,
      'vitest/consistent-test-filename': [
        'error',
        {
          pattern: String.raw`.*\.spec\.[tj]sx?$`
        }
      ],
      'vitest/prefer-expect-assertions': 'off',

      'vitest/valid-title': [
        'error',
        {
          allowArguments: true
        }
      ],

      // To allow common setup
      'vitest/no-hooks': 'off',

      // Disable deprecated rules
      'vitest/no-done-callback': 'off',

      // Allow magic numbers for behaviour testing
      'no-magic-numbers': 'off'
    },
    settings: {
      vitest: {
        typecheck: true
      }
    }
  }
)
