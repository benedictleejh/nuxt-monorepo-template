import { defineFlatConfigs } from '../../.nuxt/eslint.config.mjs'

export const vue = defineFlatConfigs(
  {
    name: 'nuxt-app/vue',
    rules: {
      'vue/block-order': [
        'error',
        {
          order: [
            'script',
            'template',
            'style'
          ]
        }
      ],
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
            allowNoLang: false
          }
        }
      ],
      'vue/component-api-style': 'error',
      'vue/component-options-name-casing': 'off',
      'vue/custom-event-name-casing': 'error',
      'vue/define-emits-declaration': [
        'error',
        'type-literal'
      ],
      'vue/define-macros-order': [
        'error',
        {
          order: [
            'defineProps',
            'defineEmits'
          ],
          defineExposeLast: true
        }
      ],
      'vue/define-props-declaration': 'error',
      'vue/define-props-destructuring': 'error',
      'vue/html-button-has-type': 'error',
      'vue/html-comment-content-newline': 'error',
      'vue/html-comment-indent': 'error',
      'vue/match-component-file-name': [
        'error',
        {
          extensions: [
            '.vue',
            '.jsx',
            '.tsx'
          ],
          shouldMatchCase: true
        }
      ],
      'vue/match-component-import-name': 'error',
      'vue/new-line-between-multi-line-property': 'error',
      'vue/next-tick-style': 'error',
      'vue/no-bare-strings-in-template': 'off',
      'vue/no-boolean-default': 'error',
      'vue/no-duplicate-attr-inheritance': 'error',
      'vue/no-empty-component-block': 'error',
      'vue/no-import-compiler-macros': 'error',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-negated-v-if-condition': 'error',
      'vue/no-ref-object-reactivity-loss': 'error',
      'vue/no-restricted-html-elements': [
        'error',
        {
          element: ['a', 'RouterLink'],
          message: 'Prefer the use of NuxtLink component'
        }
      ],
      'vue/no-root-v-if': 'error',
      'vue/no-setup-props-reactivity-loss': 'error',
      'vue/no-static-inline-styles': 'error',
      'vue/no-template-target-blank': 'off', // NuxtLink handles this directly
      'vue/no-this-in-before-route-enter': 'error',
      'vue/no-undef-components': 'off', // Turn off due to Nuxt auto imports
      'vue/no-undef-properties': 'error',
      'vue/no-unsupported-features': 'off', // Keep Vue updated
      'vue/no-unused-emit-declarations': 'error',
      'vue/no-unused-properties': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-use-v-else-with-v-for': 'error',
      'vue/no-useless-mustaches': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/no-v-text': 'error',
      'vue/padding-line-between-tags': 'off', // Does not play well with Pug templates
      'vue/padding-lines-in-component-definition': 'error',
      'vue/prefer-define-options': 'error',
      'vue/prefer-prop-type-boolean-first': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/prefer-use-template-ref': 'error',
      'vue/require-default-export': 'error',
      'vue/require-direct-export': 'error',
      'vue/require-emit-validator': 'error',
      'vue/require-explicit-slots': 'error',
      'vue/require-expose': 'error',
      'vue/require-macro-variable-name': 'error',
      'vue/require-name-property': 'off',
      'vue/require-prop-comment': 'error',
      'vue/require-typed-object-prop': 'error',
      'vue/require-typed-ref': 'error',
      'vue/script-indent': 'error',
      'vue/slot-name-casing': 'error',
      'vue/v-for-delimiter-style': 'error',
      'vue/v-if-else-key': 'off',
      'vue/v-on-handler-style': 'error',

      'vue/array-bracket-newline': [
        'error',
        'consistent'
      ],
      'vue/array-element-newline': [
        'error',
        {
          ArrayExpression: {
            minItems: 5,
            multiline: true
          },
          ArrayPattern: {
            minItems: 5,
            multiline: true
          }
        }
      ],
      'vue/camelcase': 'error',
      'vue/dot-location': [
        'error',
        'property'
      ],
      'vue/dot-notation': [
        'error',
        {
          allowKeywords: true,
          allowPattern: ''
        }
      ],
      'vue/eqeqeq': 'error',
      'vue/func-call-spacing': [
        'error',
        'never'
      ],
      'vue/max-len': 'off',
      'vue/multiline-ternary': 'off',
      'vue/no-console': 'error',
      'vue/no-constant-condition': [
        'error',
        {
          checkLoops: 'allExceptWhileTrue'
        }
      ],
      'vue/no-empty-pattern': [
        'error',
        {
          allowObjectPatternsAsParameters: false
        }
      ],
      'vue/no-extra-parens': [
        'error',
        'functions'
      ],
      'vue/no-implicit-coercion': 'error',
      'vue/no-irregular-whitespace': 'error',
      'vue/no-loss-of-precision': 'error',
      'vue/no-negated-condition': 'error',
      'vue/no-sparse-arrays': 'error',
      'vue/no-useless-concat': 'error',
      'vue/object-shorthand': 'error',
      'vue/prefer-template': 'error',
      'vue/space-infix-ops': 'error',
      'vue/space-unary-ops': [
        'error',
        {
          nonwords: false,
          words: true
        }
      ]
    }
  }
)
