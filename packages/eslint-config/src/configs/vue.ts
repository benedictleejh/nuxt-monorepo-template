import type {
  EslintConfigName,
  EslintFlatConfigItem,
  ResolvedConfig
} from '../utils'

import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'
import vueEslintPlugin from 'eslint-plugin-vue'
import vueEslintParser from 'vue-eslint-parser'

import { getRulesFromEslintConfig, upgradeWarnConfigRulesToError } from '../utils'

import { typescriptParser } from './typescript'

export {
  vueEslintParser
}

// Imported from 'eslint-plugin-vue/lib/utils/inline-non-void-elements.json'
const INLINE_ELEMENTS = [
  'a',
  'abbr',
  'audio',
  'b',
  'bdi',
  'bdo',
  'canvas',
  'cite',
  'code',
  'data',
  'del',
  'dfn',
  'em',
  'i',
  'iframe',
  'ins',
  'kbd',
  'label',
  'map',
  'mark',
  'noscript',
  'object',
  'output',
  'picture',
  'q',
  'ruby',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'time',
  'u',
  'var',
  'video'
]

const vueRules = getRulesFromEslintConfig(vueEslintPlugin.configs['flat/recommended'])

const updatedVueRules = upgradeWarnConfigRulesToError(vueRules)

export const vue = (config: ResolvedConfig) => defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
  {
    name: 'nuxt-monorepo-template/vue/setup',
    plugins: {
      vue: vueEslintPlugin
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        parser: typescriptParser,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },

      // This allows Vue plugin to work with auto imports
      // https://github.com/vuejs/eslint-plugin-vue/pull/2422
      globals: {
        computed: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineProps: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly',
        reactive: 'readonly',
        ref: 'readonly',
        shallowReactive: 'readonly',
        shallowRef: 'readonly',
        toRef: 'readonly',
        toRefs: 'readonly',
        watch: 'readonly',
        watchEffect: 'readonly'
      }
    }
  },
  {
    name: 'nuxt-monorepo-template/vue/rules',
    files: [
      '**/*.vue'
    ],
    languageOptions: {
      parser: vueEslintParser
    },

    // Due to rudimentary type definitions for the Vue ESLint plugin, the processors are typed as `any` instead of the
    // correct ESLint processor type
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    processor: vueEslintPlugin.processors.vue,
    rules: {
      // Leads to false positives in Vue SFCs, and better handled by @typescript-eslint/no-unused-vars
      'no-useless-assignment': 'off',
      ...updatedVueRules,

      'vue/html-indent': [
        'error',
        config.features.stylistic.indent
      ],
      'vue/html-quotes': [
        'error',
        'double'
      ],
      'vue/multiline-html-element-content-newline': [
        'error',
        {
          ignoreWhenEmpty: true,
          ignores: [
            'pre',
            'textarea',
            'router-link',
            'RouterLink',
            'nuxt-link',
            'NuxtLink',
            'u-link',
            'ULink',
            ...INLINE_ELEMENTS
          ],
          allowEmptyLines: false
        }
      ],
      'vue/one-component-per-file': 'off',
      'vue/require-default-prop': 'off',
      'vue/singleline-html-element-content-newline': [
        'error',
        {
          ignoreWhenNoAttributes: true,
          ignoreWhenEmpty: true,
          ignores: [
            'pre',
            'textarea',
            'router-link',
            'RouterLink',
            'nuxt-link',
            'NuxtLink',
            'u-link',
            'ULink',
            ...INLINE_ELEMENTS
          ],
          externalIgnores: []
        }
      ],

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
      'vue/block-tag-newline': [
        'error',
        {
          multiline: 'always',
          singleline: 'always'
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
      'vue/enforce-style-attribute': 'off',
      'vue/html-button-has-type': 'error',
      'vue/html-comment-content-newline': 'error',
      'vue/html-comment-content-spacing': [
        'error',
        'always',
        {
          exceptions: [
            '-'
          ]
        }
      ],
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
      'vue/max-lines-per-block': 'off',
      'vue/max-props': 'off',
      'vue/max-template-depth': 'off',
      'vue/new-line-between-multi-line-property': 'error',
      'vue/next-tick-style': 'error',
      'vue/no-bare-strings-in-template': 'off',
      'vue/no-boolean-default': 'error',
      'vue/no-duplicate-attr-inheritance': 'error',
      'vue/no-duplicate-class-names': 'error',
      'vue/no-empty-component-block': 'error',
      'vue/no-import-compiler-macros': 'error',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-negated-v-if-condition': 'error',
      'vue/no-potential-component-option-typo': 'error',
      'vue/no-ref-object-reactivity-loss': 'error',
      'vue/no-restricted-block': 'error',
      'vue/no-restricted-call-after-await': 'error',
      'vue/no-restricted-class': 'error',
      'vue/no-restricted-component-names': 'error',
      'vue/no-restricted-component-options': 'error',
      'vue/no-restricted-custom-event': 'error',
      'vue/no-restricted-html-elements': [
        'error',
        ...(config.features.vue === 'with-nuxt'
          ? [
              {
                element: [
                  'a',
                  'RouterLink'
                ],
                message: 'Prefer the use of the NuxtLink component'
              },
              {
                element: [
                  'img'
                ],
                message: 'Prefer the use of the NuxtImg component'
              }
            ]
          : [])
      ],
      'vue/no-restricted-props': 'error',
      'vue/no-restricted-static-attribute': 'error',
      'vue/no-restricted-v-bind': 'error',
      'vue/no-restricted-v-on': 'error',
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
      'vue/padding-line-between-blocks': [
        'error',
        'always'
      ],
      'vue/padding-line-between-tags': 'off', // Does not play well with Pug templates
      'vue/padding-lines-in-component-definition': 'error',
      'vue/prefer-define-options': 'error',
      'vue/prefer-prop-type-boolean-first': 'error',
      'vue/prefer-separate-static-class': 'error',
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
      'vue/restricted-component-names': 'off',
      'vue/script-indent': 'off', // Handled by ESLint Stylistic
      'vue/slot-name-casing': 'error',
      'vue/sort-keys': 'off',
      'vue/static-class-names-order': 'error',
      'vue/v-for-delimiter-style': 'error',
      'vue/v-if-else-key': 'off',
      'vue/v-on-handler-style': 'error',

      'vue/array-bracket-newline': [
        'error',
        'consistent'
      ],
      'vue/array-bracket-spacing': [
        'error',
        'never'
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
      'vue/arrow-spacing': [
        'error',
        {
          after: true,
          before: true
        }
      ],
      'vue/block-spacing': [
        'error',
        'always'
      ],
      'vue/brace-style': [
        'error',
        'stroustrup',
        {
          allowSingleLine: true
        }
      ],
      'vue/camelcase': 'error',
      'vue/comma-dangle': [
        'error',
        config.features.stylistic.commaDangle
      ],
      'vue/comma-spacing': [
        'error',
        {
          after: true,
          before: false
        }
      ],
      'vue/comma-style': [
        'error',
        'last'
      ],
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
      'vue/key-spacing': [
        'error',
        {
          afterColon: true,
          beforeColon: false
        }
      ],
      'vue/keyword-spacing': [
        'error',
        {
          after: true,
          before: true
        }
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
      'vue/no-restricted-syntax': 'error',
      'vue/no-sparse-arrays': 'error',
      'vue/no-useless-concat': 'error',
      'vue/object-curly-newline': 'off',
      'vue/object-curly-spacing': [
        'error',
        'always'
      ],
      'vue/object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true
        }
      ],
      'vue/object-shorthand': 'error',
      'vue/operator-linebreak': [
        'error',
        'before'
      ],
      'vue/prefer-template': 'error',
      'vue/quote-props': [
        'error',
        'consistent-as-needed'
      ],
      'vue/space-in-parens': [
        'error',
        'never'
      ],
      'vue/space-infix-ops': 'error',
      'vue/space-unary-ops': [
        'error',
        {
          nonwords: false,
          words: true
        }
      ],
      'vue/template-curly-spacing': 'error'
    }
  },
  {
    name: 'nuxt-monorepo-template/typescript/vue-sfc-false-positives',
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
