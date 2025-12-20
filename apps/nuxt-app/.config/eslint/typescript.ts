import { defineFlatConfigs } from '../../.nuxt/eslint.config.mjs'

export const typescript = defineFlatConfigs(
  {
    name: 'nuxt-app/typescript',
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/class-literal-property-style': 'error',
      '@typescript-eslint/class-methods-use-this': 'off', // ESLint supports this now
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-return': 'off', // replaced by TS noImplicitReturn
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          arrayLiteralTypeAssertions: 'never',
          objectLiteralTypeAssertions: 'never'
        }
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/default-param-last': 'off', // ESLint supports this now
      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/init-declarations': 'off', // ESLint supports this now
      '@typescript-eslint/max-params': 'off', // ESLint supports this now
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      'camelcase': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase']
        },
        {
          selector: 'import',
          format: [
            'camelCase',
            'PascalCase'
          ]
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
      ],
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        {
          ignoreVoidReturningFunctions: true
        }
      ],
      '@typescript-eslint/no-dupe-class-members': 'off', // ESLint supports this now
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-empty-function': 'off', // ESLint supports this now
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-invalid-this': 'off', // ESLint supports this now
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-loop-func': 'off', // ESLint supports this now
      '@typescript-eslint/no-magic-numbers': 'off', // ESLint supports this now
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-redeclare': 'off', // ESLint supports this now
      '@typescript-eslint/no-restricted-imports': 'off', // ESLint supports this now
      '@typescript-eslint/no-shadow': 'off', // ESLint supports this now
      '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unsafe-type-assertion': 'error',
      '@typescript-eslint/no-use-before-define': 'off', // ESLint supports this now
      '@typescript-eslint/no-useless-constructor': 'off', // ESLint supports this now
      '@typescript-eslint/no-useless-empty-export': 'off', // To enable files with only augmentations
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/parameter-properties': 'error',
      'prefer-destructuring': 'off',
      '@typescript-eslint/prefer-destructuring': [
        'error',
        {
          array: true,
          object: true
        },
        {
          enforceForRenamedProperties: true,
          enforceForDeclarationWithTypeAnnotation: true
        }
      ],
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/prefer-find': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-literal-enum-member': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off', // Handled by no-param-reassign
      '@typescript-eslint/prefer-regexp-exec': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': [
        'error',
        {
          allowDefaultCaseForExhaustiveSwitch: true,
          requireDefaultForNonUnion: true,
          considerDefaultExhaustiveForUnions: false
        }
      ],
      '@typescript-eslint/unified-signatures': 'error'
    }
  },
  {
    name: 'nuxt-app/typescript/config-file-overrides',
    files: [
      '*.config.*',
      '.config/**'
    ],
    rules: {
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
  },
  {
    name: 'nuxt-app/typescript/vue-file-false-positives',
    files: [
      '**/*.vue',
      '**/components/**/*.ts',
      '**/pages/**/*.ts'
    ],
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off'
    }
  }
)
