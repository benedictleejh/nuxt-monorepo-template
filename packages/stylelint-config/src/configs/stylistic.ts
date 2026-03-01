/// <reference types="@stylelint-types/stylelint-stylistic" />

import { defineConfig as defineStylelintConfig } from 'stylelint-define-config'

export const stylistic = defineStylelintConfig({
  rules: {
    // Function
    '@stylistic/function-comma-newline-before': 'never-multi-line',

    // Value list
    '@stylistic/value-list-comma-newline-before': 'never-multi-line',

    // Declaration block
    '@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
    '@stylistic/declaration-block-trailing-semicolon': undefined, // Not needed in Sass

    // Block
    // Sass does not use braces
    '@stylistic/block-closing-brace-newline-before': undefined,
    '@stylistic/block-closing-brace-space-after': undefined,
    '@stylistic/block-opening-brace-newline-before': undefined,
    '@stylistic/block-opening-brace-space-before': undefined,

    // Selector list
    '@stylistic/selector-list-comma-newline-before': 'never-multi-line',
    '@stylistic/selector-list-comma-space-after': 'always-single-line',

    // Media query list
    '@stylistic/media-query-list-comma-newline-before': 'never-multi-line',

    // At-rule
    '@stylistic/at-rule-name-newline-after': undefined,
    '@stylistic/at-rule-semicolon-space-before': undefined,

    // Named grid areas
    '@stylistic/named-grid-areas-alignment': [
      true,
      {
        alignQuotes: true
      }
    ],

    // General / Sheet
    '@stylistic/linebreaks': undefined,
    '@stylistic/unicode-bom': undefined
  }
})

export default stylistic
