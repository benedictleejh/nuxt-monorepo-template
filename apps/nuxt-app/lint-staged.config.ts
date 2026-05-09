import type { Configuration } from 'lint-staged'

import manifest from './package.json' with { type: 'json' }

const { name } = manifest

export default {
  '*.{ts,tsx,js,jsx,vue}': stagedFiles => [
    `pnpm --filter ${name} lint:es ${stagedFiles.join(' ')}`
  ],
  '*.{css,less,scss,sass,styl,stylus,pcss,postcss,sss,vue}': stagedFiles => [
    `pnpm --filter ${name} exec stylelint ${stagedFiles.join(' ')}`
  ],
  '*.{*,1}': () => [
    `pnpm --filter ${name} typecheck`
  ],
  '*.{*,2}': () => [
    `pnpm --filter ${name} test:unit`
  ]
} satisfies Configuration
