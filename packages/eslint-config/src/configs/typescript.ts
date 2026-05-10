import type { EslintConfigName, EslintFlatConfigItem } from '#eslint-config/utils'

import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'

export {
  typescriptParser
}

export const typescript = () => defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
  // @ts-expect-error See https://github.com/typescript-eslint/typescript-eslint/issues/11543
  {
    name: 'nuxt-monorepo-template/typescript/setup',
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin
    }
  },
  {
    name: 'nuxt-monorepo-template/typescript/rules',
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.mts',
      '**/*.cts',
      '**/*.vue'
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
        projectService: {
          allowDefaultProject: ['./*.js'],
          defaultProject: './tsconfig.json'
        },
        tsconfigRootDir: process.cwd()
      }
    },
    rules: {
      ...typescriptEslintPlugin.configs['strict-type-checked']?.rules,
      // Include typescript eslint rules in *.vue files
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
      'constructor-super': 'off', // Ts(2335) & ts(2377)
      'getter-return': 'off', // Ts(2378)
      'no-const-assign': 'off', // Ts(2588)
      'no-dupe-args': 'off', // Ts(2300)
      'no-dupe-class-members': 'off', // Ts(2393) & ts(2300)
      'no-dupe-keys': 'off', // Ts(1117)
      'no-func-assign': 'off', // Ts(2539)
      'no-import-assign': 'off', // Ts(2539) & ts(2540)
      'no-new-symbol': 'off', // Ts(7009)
      'no-obj-calls': 'off', // Ts(2349)
      'no-redeclare': 'off', // Ts(2451)
      'no-setter-return': 'off', // Ts(2408)
      'no-this-before-super': 'off', // Ts(2376)
      'no-undef': 'off', // Ts(2304)
      'no-unreachable': 'off', // Ts(7027)
      'no-unsafe-negation': 'off', // Ts(2365) & ts(2360) & ts(2358)
      'no-var': 'error', // Ts transpiles let/const to var, so no need for vars any more
      'prefer-const': 'error', // Ts provides better types with const
      'prefer-rest-params': 'error', // Ts provides better types with rest args over arguments
      'prefer-spread': 'error', // Ts transpiles spread to apply, so no need for manual apply
      'valid-typeof': 'off', // Ts(2367)
      'no-unused-vars': 'off', // Ts takes care of this

      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/ban-tslint-comment': 'error',
      '@typescript-eslint/class-literal-property-style': 'error',
      '@typescript-eslint/class-methods-use-this': 'off', // ESLint supports this now
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-return': 'off', // Replaced by TS noImplicitReturn
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
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: false,
          prefer: 'type-imports'
        }
      ],
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
          selector: 'variable',
          modifiers: ['unused'],
          leadingUnderscore: 'require',
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
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends'
        }
      ],
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-invalid-this': 'off', // ESLint supports this now
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-loop-func': 'off', // ESLint supports this now
      '@typescript-eslint/no-magic-numbers': 'off', // ESLint supports this now
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-redeclare': 'off', // ESLint supports this now
      '@typescript-eslint/no-restricted-imports': 'off', // ESLint supports this now
      '@typescript-eslint/no-restricted-types': 'off',
      '@typescript-eslint/no-shadow': 'off', // ESLint supports this now
      '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unsafe-type-assertion': 'error',
      'no-unused-private-class-members': 'off',
      '@typescript-eslint/no-unused-private-class-members': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-use-before-define': 'off', // ESLint supports this now
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
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/strict-void-return': 'error',
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
    name: 'nuxt-monorepo-template/typescript/config-file-overrides',
    files: [
      '**/*.config.*',
      '**/.config/**'
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
          selector: 'variable',
          modifiers: ['unused'],
          leadingUnderscore: 'require',
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
  }
)
