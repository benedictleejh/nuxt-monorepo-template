import fs from 'node:fs/promises'

import createConfigForNuxt, { resolveOptions } from '@nuxt/eslint-config'
import nuxtEslintPlugin from '@nuxt/eslint-plugin'
import stylisticEslintPlugin from '@stylistic/eslint-plugin'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import vitestEslintPlugin from '@vitest/eslint-plugin'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import importEslintPlugin from 'eslint-plugin-import-x'
import playwrightEslintPlugin from 'eslint-plugin-playwright'
import testingLibraryEslintPlugin from 'eslint-plugin-testing-library'
import unicornEslintPlugin from 'eslint-plugin-unicorn'
import vueEslintPlugin from 'eslint-plugin-vue'
import vuePugEslintPlugin from 'eslint-plugin-vue-pug'
import vueAccessibilityEslintPlugin from 'eslint-plugin-vuejs-accessibility'
import { pluginsToRulesDTS } from 'eslint-typegen/core'

// See https://github.com/un-ts/eslint-plugin-import-x/issues/365
// eslint-disable-next-line import/no-relative-parent-imports
import { createNuxtEslintConfig } from '#eslint-config'

const nuxtConfigOptions = resolveOptions({
  features: {
    standalone: false,
    nuxt: {
      sortConfigKeys: true
    }
  },
  // Dummy Nuxt directory configuration, as we only need the resulting config names
  dirs: {
    pages: ['app/pages'],
    composables: ['app/composables', 'app/utils'],
    components: ['app/components'],
    componentsPrefixed: [],
    layouts: ['app/layouts'],
    plugins: ['app/plugins'],
    middleware: ['app/middleware'],
    modules: ['modules'],
    servers: [],
    root: [],
    src: ['app']
  }
})
const nuxtConfig = createConfigForNuxt(nuxtConfigOptions)
const config = await createNuxtEslintConfig(nuxtConfig)
const configNames = config.map(c => c.name).filter(n => n !== undefined)

const rawDts = await pluginsToRulesDTS(
  {
    '': {
      // There is no other way to access ESLint's built in rules at the moment
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      rules: Object.fromEntries(builtinRules.entries())
    },
    // @ts-expect-error See https://github.com/typescript-eslint/typescript-eslint/issues/11543
    '@typescript-eslint': typescriptEslintPlugin,
    'nuxt': nuxtEslintPlugin,
    '@stylistic': stylisticEslintPlugin,
    'unicorn': unicornEslintPlugin,
    'vitest': vitestEslintPlugin,
    'playwright': playwrightEslintPlugin,
    'testing-library': testingLibraryEslintPlugin,
    'import': importEslintPlugin,
    'vue-accessibility': vueAccessibilityEslintPlugin,
    'vue-pug': vuePugEslintPlugin,
    'vue': vueEslintPlugin
  },
  {
    includeAugmentation: false,
    includeIgnoreComments: false,
    exportTypeName: 'RuleDefinitions'
  }
)
const dts = rawDts
  .replace(/^/u, `export type ConfigNames = ${configNames.map(n => `'${n}'`).join(' | ')} | string & {}
`)
  // Fix https://github.com/bcherny/json-schema-to-typescript/issues/671
  .replace(
    /^type VitestValidTitle = \[\]\|\[\{\s*ignoreTypeOfDescribeName\?:\s*boolean\s*allowArguments\?:\s*boolean\s*disallowedWords\?:\s*string\[\]\s*\[k:\s*string\]:\s*\(string\s*\|\s*\[string\]\s*\|\s*\[string,\s*string\]\s*\|\s*\{\s*\[k:\s*string\]:\s*\(string\s*\|\s*\[string\]\s*\|\s*\[string,\s*string\]\)\s*\|\s*undefined\s*\}\)\s*\}\]$/um,
    `type MatcherGroups = 'describe' | 'test' | 'it'
type MatcherAndMessage = [matcher: string, message?: string]
type VitestValidTitle = []|[{
  ignoreTypeOfDescribeName?: boolean
  allowArguments?: boolean
  disallowedWords?: string[]
  mustNotMatch?:
    | Partial<Record<MatcherGroups, string | MatcherAndMessage>>
    | MatcherAndMessage
    | string
  mustMatch?:
    | Partial<Record<MatcherGroups, string | MatcherAndMessage>>
    | MatcherAndMessage
    | string
}]`
  )

await fs.writeFile('src/eslint-rules.d.ts', dts)
