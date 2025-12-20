import { defineConfig as defineStylelintConfig } from 'stylelint-define-config'

export default defineStylelintConfig({
  extends: [
    './.config/stylelint/setup.ts',
    './.config/stylelint/css.ts',
    './.config/stylelint/sass.ts',
    './.config/stylelint/stylistic.ts'
  ]
})
