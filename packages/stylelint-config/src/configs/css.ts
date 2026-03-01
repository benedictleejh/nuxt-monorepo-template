import { defineConfig as defineStylelintConfig } from 'stylelint-define-config'

export const css = defineStylelintConfig({
  rules: {
    // Deprecated
    'selector-no-deprecated': true,

    // Empty
    'no-empty-source': undefined,

    // Unknown
    'no-unknown-animations': undefined,
    'no-unknown-custom-media': undefined,
    'no-unknown-custom-properties': undefined,
    'unit-no-unknown': true,

    // At-rule
    'at-rule-allowed-list': undefined,
    'at-rule-disallowed-list': undefined,
    'at-rule-property-required-list': undefined,

    // Colour
    'color-hex-alpha': undefined,
    'color-named': undefined,
    'color-no-hex': undefined,

    // Comment
    'comment-word-disallowed-list': undefined,

    // Declaration
    'declaration-no-important': undefined,
    'declaration-property-unit-allowed-list': undefined,
    'declaration-property-unit-disallowed-list': undefined,
    'declaration-property-value-allowed-list': undefined,
    'declaration-property-value-disallowed-list': undefined,

    // Function
    'function-allowed-list': undefined,
    'function-disallowed-list': undefined,
    'function-url-no-scheme-relative': true,
    'function-url-scheme-allowed-list': undefined,
    'function-url-scheme-disallowed-list': undefined,

    // Media feature
    'media-feature-name-allowed-list': undefined,
    'media-feature-name-disallowed-list': undefined,
    'media-feature-name-unit-allowed-list': undefined,
    'media-feature-name-value-allowed-list': undefined,

    // Property
    'property-allowed-list': undefined,
    'property-disallowed-list': undefined,

    // Rule
    'rule-nesting-at-rule-required-list': undefined,
    'rule-selector-property-disallowed-list': undefined,

    // Selector
    'selector-attribute-name-disallowed-list': undefined,
    'selector-attribute-operator-allowed-list': undefined,
    'selector-attribute-operator-disallowed-list': undefined,
    'selector-combinator-allowed-list': undefined,
    'selector-combinator-disallowed-list': undefined,
    'selector-disallowed-list': undefined,
    'selector-no-qualifying-type': undefined,
    'selector-pseudo-class-allowed-list': undefined,
    'selector-pseudo-class-disallowed-list': undefined,
    'selector-pseudo-element-allowed-list': undefined,
    'selector-pseudo-element-disallowed-list': undefined,

    // Unit
    'unit-allowed-list': undefined,
    'unit-disallowed-list': undefined,

    // Empty lines
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-same-name-blockless'
        ],

        ignore: [
          'inside-block'
        ]
      }
    ],

    // Layout mappings
    'property-layout-mappings': 'flow-relative',

    // Max & min
    'declaration-property-max-values': undefined,
    'max-nesting-depth': undefined,
    'selector-max-attribute': undefined,
    'selector-max-class': undefined,
    'selector-max-combinators': undefined,
    'selector-max-compound-selectors': undefined,
    'selector-max-id': undefined,
    'selector-max-pseudo-class': undefined,
    'selector-max-specificity': undefined,
    'selector-max-type': undefined,
    'selector-max-universal': undefined,
    'time-min-milliseconds': undefined,

    // Notation
    'display-notation': 'full',
    'font-weight-notation': 'numeric',
    'relative-selector-nesting-notation': 'implicit',

    // Pattern
    'comment-pattern': undefined,
    'selector-nested-pattern': undefined
  }
})

export default css
