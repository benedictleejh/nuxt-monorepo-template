import type { Configuration } from 'lint-staged'

export default {
  '*.{ts,tsx,js,jsx,vue}': stagedFiles => [
    `pnpm lint:es ${stagedFiles.join(' ')}`
  ],
  '*.{css,less,scss,sass,styl,stylus,pcss,postcss,sss,vue}': stagedFiles => [
    `stylelint ${stagedFiles.join(' ')}`
  ],
  '*.{*,1}': () => [
    'pnpm typecheck'
  ],
  '*.{*,2}': () => [
    'pnpm test:unit'
  ]
} satisfies Configuration
