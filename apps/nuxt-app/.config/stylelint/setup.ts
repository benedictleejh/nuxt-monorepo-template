import { defineConfig as defineStylelintConfig } from 'stylelint-define-config'

export const setup = defineStylelintConfig({
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    '@stylistic/stylelint-config'
  ],
  overrides: [
    {
      files: [
        '**/*.sass'
      ],
      customSyntax: 'postcss-sass'
    }
  ]
})

export default setup
