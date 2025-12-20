/// <reference types="@stylelint-types/stylelint-stylistic" />

import { defineConfig as defineStylelintConfig } from 'stylelint-define-config'

export const stylistic = defineStylelintConfig({
  rules: {
    '@stylistic/function-comma-newline-before': 'never-multi-line',
    '@stylistic/value-list-comma-newline-before': 'never-multi-line',
    '@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
    '@stylistic/block-opening-brace-newline-before': undefined,
    '@stylistic/selector-list-comma-newline-before': 'never-multi-line',
    '@stylistic/selector-list-comma-space-after': 'always-single-line',
    '@stylistic/media-query-list-comma-newline-before': 'never-multi-line',
    '@stylistic/at-rule-name-newline-after': undefined,
    '@stylistic/named-grid-areas-alignment': [
      true,
      {
        alignQuotes: true
      }
    ],
    '@stylistic/declaration-block-trailing-semicolon': undefined,

    // Sass does not use braces
    '@stylistic/block-opening-brace-space-before': undefined,
    '@stylistic/block-closing-brace-newline-before': undefined,
    '@stylistic/block-closing-brace-space-after': undefined
  }
})

export default stylistic
