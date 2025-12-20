/// <reference types="@stylelint-types/stylelint-scss" />

import { defineConfig as defineStylelintConfig } from 'stylelint-define-config'

export const sass = defineStylelintConfig({
  rules: {
    'scss/at-each-key-value-single-line': true,
    'scss/at-function-named-arguments': 'always',
    'scss/load-partial-extension': 'never',
    'scss/load-no-partial-leading-underscore': true,
    'scss/at-mixin-named-arguments': 'always',
    'scss/at-mixin-no-risky-nesting-selector': true,
    'scss/at-root-no-redundant': true,
    'scss/at-use-no-redundant-alias': true,
    'scss/at-use-no-unnamespaced': undefined,
    'scss/block-no-redundant-nesting': undefined,
    'scss/declaration-nested-properties': [
      'always',
      {
        except: ['only-of-namespace']
      }
    ],
    // To be able to use parenthesis to spread values over multiple lines
    'scss/declaration-property-value-no-unknown': undefined,
    'scss/comment-no-loud': undefined,
    'scss/dimension-no-non-numeric-values': true,
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
    'scss/double-slash-comment-inline': undefined,
    'scss/function-calculation-no-interpolation': true,
    'scss/function-color-channel': true,
    'scss/function-color-relative': true,
    'function-no-unknown': undefined,
    'scss/function-no-unknown': true,
    'scss/map-keys-quotes': 'always',
    'scss/media-feature-value-dollar-variable': [
      'always',
      {
        ignore: ['keywords']
      }
    ],
    'scss/no-dollar-variables': undefined,
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-load-rules': true,
    'scss/no-unused-private-members': true,
    'scss/partial-no-import': true,
    'scss/selector-nest-combinators': 'always',
    'scss/property-no-unknown': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/selector-no-union-class-name': undefined
  }
})

export default sass
