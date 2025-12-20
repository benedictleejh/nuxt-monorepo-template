import eslintPluginVitest from '@vitest/eslint-plugin'

import { defineFlatConfigs } from '../../.nuxt/eslint.config.mjs'

export const vitest = defineFlatConfigs(
  // @ts-expect-error See https://github.com/vitest-dev/eslint-plugin-vitest/issues/737
  {
    name: 'nuxt-app/vitest',
    plugins: {
      vitest: eslintPluginVitest
    },
    files: [
      'tests/**'
    ],
    ignores: [
      'tests/e2e/**'
    ],
    rules: {
      ...eslintPluginVitest.configs.all.rules,
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
