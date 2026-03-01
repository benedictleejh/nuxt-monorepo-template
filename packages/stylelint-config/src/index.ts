import { defineConfig as defineStylelintConfig } from 'stylelint-define-config'

export default defineStylelintConfig({
  extends: [
    './configs/setup.ts',
    './configs/css.ts',
    './configs/sass.ts',
    './configs/stylistic.ts'
  ]
})
