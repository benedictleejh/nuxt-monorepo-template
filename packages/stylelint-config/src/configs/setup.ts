import { defineConfig as defineStylelintConfig } from 'stylelint-define-config'

export const setup = defineStylelintConfig({
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    '@stylistic/stylelint-config'
  ],
  languageOptions: {
    // @ts-expect-error See https://github.com/stylelint-types/stylelint-define-config/issues/2
    directionality: {
      block: 'top-to-bottom',
      inline: 'left-to-right'
    }
  },
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
