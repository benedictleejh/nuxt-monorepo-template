import { createEslintConfig } from '@nuxt-monorepo-template/eslint-config'

export default createEslintConfig({
  features: {
    playwright: false,
    vue: false
  }
})
  .append({
    name: 'stylelint-config/typescript/config-file-overrides',
    rules: {
      'no-magic-numbers': 'off',
      'max-lines-per-function': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase']
        },
        {
          selector: [
            'objectLiteralProperty',
            'objectLiteralMethod'
          ],
          format: []
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE']
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow'
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require'
        },
        {
          selector: 'typeLike',
          format: ['PascalCase']
        }
      ]
    }
  })
