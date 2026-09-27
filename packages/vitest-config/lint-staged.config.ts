import type { Configuration } from 'lint-staged'

import manifest from './package.json' with { type: 'json' }

const { name } = manifest

export default {
  '*.ts': stagedFiles => [
    `pnpm --filter '${name}' lint:es ${stagedFiles.join(' ')}`
  ],
  '*.{*,1}': () => [
    `pnpm --filter '${name}' typecheck`
  ],
  '*.{*,2}': () => [
    `pnpm --filter '${name}' test:unit`
  ]
} satisfies Configuration
