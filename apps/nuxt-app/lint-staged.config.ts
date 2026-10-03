import { defineConfig } from 'lint-staged/config'

import manifest from './package.json' with { type: 'json' }

const { name } = manifest

export default defineConfig({
  '*.{ts,tsx,js,jsx,vue}': stagedFiles => [
    `pnpm --filter ${name} lint:es ${stagedFiles.join(' ')}`
  ],
  '*.{css,less,scss,sass,styl,stylus,pcss,postcss,sss,vue}': stagedFiles => [
    `pnpm --filter ${name} exec stylelint ${stagedFiles.join(' ')}`
  ],
  '*.*': () => [
    [
      `pnpm --filter ${name} typecheck`,
      `pnpm --filter ${name} test:unit`
    ]
  ]
})
