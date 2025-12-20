import { defineFlatConfigs } from '../../.nuxt/eslint.config.mjs'

export const javascript = defineFlatConfigs(
  {
    name: 'nuxt-app/javascript',
    rules: {
      'array-callback-return': 'error',
      'no-await-in-loop': 'error',
      'no-constructor-return': 'error',
      'no-duplicate-imports': 'off', // Handled by import-x instead
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-unassigned-vars': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-use-before-define': 'error',
      'no-useless-assignment': 'off', // Leads to false positives in Vue SFCs, and better handled by @typescript-eslint/no-unused-vars
      'require-atomic-updates': 'error',

      'accessor-pairs': 'error',
      'arrow-body-style': [
        'error',
        'as-needed'
      ],
      'class-methods-use-this': 'error',
      'complexity': [
        'error',
        {
          max: 10
        }
      ],
      'consistent-this': 'error',
      'curly': [
        'error',
        'all'
      ],
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'eqeqeq': 'error',
      'func-name-matching': 'error',
      'func-names': [
        'error',
        'as-needed'
      ],
      'func-style': 'error',
      'grouped-accessor-pairs': [
        'error',
        'getBeforeSet',
        {
          enforceForTSTypes: true
        }
      ],
      'guard-for-in': 'error',
      'init-declarations': 'error',
      'max-classes-per-file': 'error',
      'max-params': 'off',
      'new-cap': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-console': 'error',
      'no-continue': 'error',
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-label': 'error',
      'no-implicit-coercion': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-magic-numbers': [
        'error',
        {
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          ignoreClassFieldInitialValues: true,
          enforceConst: true,
          detectObjects: false,
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
          ignoreReadonlyClassProperties: true,
          ignoreTypeIndexes: true
        }
      ],
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-object-constructor': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'error',
      'no-plusplus': 'error',
      'no-proto': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-shadow': 'error',
      'no-undef-init': 'off',
      'no-undefined': 'off',
      'no-underscore-dangle': 'off',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-void': 'off',
      'no-warning-comments': 'off',
      'object-shorthand': 'error',
      'one-var': 'off',
      'operator-assignment': 'off',
      'prefer-arrow-callback': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-named-capture-group': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-regex-literals': 'error',
      'prefer-template': 'error',
      // 'preserve-caught-error': 'error',
      'radix': ['error', 'as-needed'],
      'require-unicode-regexp': 'error',
      'sort-imports': 'off', // Handled by import-x
      'sort-keys': 'off',
      'sort-vars': 'off',
      'strict': 'error',
      'symbol-description': 'error',
      'vars-on-top': 'error',
      'yoda': 'error',

      'unicode-bom': 'error'
    }
  },
  {
    name: 'nuxt-app/javascript/config-file-overrides',
    files: [
      '*.config.*',
      '.config/**'
    ],
    rules: {
      'no-magic-numbers': 'off'
    }
  },
  {
    name: 'nuxt-app/javascript/scripts-override',
    files: [
      'scripts/**'
    ],
    rules: {
      'no-console': 'off'
    }
  }
)
