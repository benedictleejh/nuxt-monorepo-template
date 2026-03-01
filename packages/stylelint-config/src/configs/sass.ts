/// <reference types="@stylelint-types/stylelint-scss" />

import { defineConfig as defineStylelintConfig } from 'stylelint-define-config'

export const sass = defineStylelintConfig({
  rules: {
    // @-each
    'scss/at-each-key-value-single-line': true,

    // @-function
    'scss/at-function-named-arguments': 'always',

    // @-import
    'scss/at-import-partial-extension-allowed-list': undefined,
    'scss/at-import-partial-extension-disallowed-list': undefined,

    // @-mixin
    'scss/at-mixin-named-arguments': 'always',
    'scss/at-mixin-no-risky-nesting-selector': true,

    // @-root
    'scss/at-root-no-redundant': true,

    // @-use
    'scss/at-use-no-unnamespaced': undefined,
    'scss/at-use-no-redundant-alias': true,

    // $-variable
    'scss/dollar-variable-colon-newline-after': 'always',
    'scss/dollar-variable-default': true,
    'scss/dollar-variable-empty-line-after': [
      'always',
      {
        except: ['before-dollar-variable'],
        ignore: ['before-comment']
      }
    ],
    'scss/dollar-variable-first-in-block': [
      true,
      {
        ignore: [
          'comments',
          'imports'
        ]
      }
    ],
    'scss/dollar-variable-no-namespaced-assignment': true,

    // //-comment
    'scss/double-slash-comment-inline': undefined,

    // Block
    'scss/block-no-redundant-nesting': undefined,

    // Comment
    'scss/comment-no-loud': undefined,

    // Declaration
    'scss/declaration-nested-properties': [
      'always',
      {
        // @ts-expect-error See https://github.com/stylelint-types/stylelint-scss/issues/1
        except: ['only-of-namespace']
      }
    ],
    // To be able to use parenthesis to spread values over multiple lines
    'scss/declaration-property-value-no-unknown': undefined,

    // Dimension
    'scss/dimension-no-non-numeric-values': true,

    // Function
    'scss/function-calculation-no-interpolation': true,
    'scss/function-color-channel': true,
    'scss/function-color-relative': true,
    'scss/function-disallowed-list': undefined,
    'function-no-unknown': undefined,
    'scss/function-no-unknown': true,

    // Map
    'scss/map-keys-quotes': 'always',

    // Media feature
    'scss/media-feature-value-dollar-variable': [
      'always',
      {
        ignore: ['keywords']
      }
    ],

    // Partial
    'scss/partial-no-import': true,

    // Property
    'property-no-unknown': undefined,
    'scss/property-no-unknown': true,

    // Selector
    'selector-class-pattern': undefined,
    'scss/selector-class-pattern': undefined,
    'scss/selector-nest-combinators': 'always',
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/selector-no-union-class-name': undefined,

    // Load
    'scss/load-no-partial-leading-underscore': true,
    'scss/load-partial-extension': 'never',

    // General / Sheet
    'scss/no-dollar-variables': undefined,
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-load-rules': true,
    'scss/no-unused-private-members': true
  }
})

export default sass
