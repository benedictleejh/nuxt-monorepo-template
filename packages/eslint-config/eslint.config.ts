import { createEslintConfig } from './src'

export default createEslintConfig({
  features: {
    vue: true,
    playwright: false
  }
})
  .append({
    name: 'eslint-config/typescript/config-file-overrides',
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
