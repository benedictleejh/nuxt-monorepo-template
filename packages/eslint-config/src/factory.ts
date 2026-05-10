import type { FlatConfigComposer } from 'eslint-flat-config-utils'

import type {
  Config,
  EslintConfigName,
  EslintFlatConfigItem,
  ResolvedConfig
} from './utils'

import gitignore from 'eslint-config-flat-gitignore'
import { composer } from 'eslint-flat-config-utils'

import {
  ignores,
  imports,
  javascript,
  nuxtOverrides,
  playwright,
  stylistic,
  testingLibrary,
  typescript,
  unicorn,
  vitest,
  vue,
  vueAccessibility,
  vuePug
} from './configs'
import { resolveConfig } from './utils'

const buildEslintConfig = (resolvedConfig: ResolvedConfig) => composer<EslintFlatConfigItem, EslintConfigName>(
  gitignore({ strict: false, recursive: true }),
  ignores(),
  javascript(),
  typescript(),
  resolvedConfig.features.vue === false ? undefined : vue(resolvedConfig),
  resolvedConfig.features.vue === false ? undefined : vuePug(),
  resolvedConfig.features.vue === false ? undefined : vueAccessibility(),
  imports(),
  stylistic(resolvedConfig),
  unicorn(),
  vitest(),
  resolvedConfig.features.vue === false ? undefined : testingLibrary(),
  resolvedConfig.features.playwright ? playwright() : undefined
)

/**
 * Creates an ESLint config, tailored for the monorepo
 *
 * The config is customisable in whether to add specific configs, based on the needs of the package
 */
export const createEslintConfig = (config: Config): FlatConfigComposer<EslintFlatConfigItem, EslintConfigName> =>
  buildEslintConfig(resolveConfig(config))

/**
 * Creates an ESLint config for Nuxt-based projects, tailored for the monorepo
 *
 * This is meant to be used only for Nuxt-based projects, and is meant to work in tandem with @nuxt/eslint
 *
 * To use this function, pass in the `withNuxt()` function, i.e. `createNuxtEslintConfig(withNuxt())`
 */
export const createNuxtEslintConfig =
  (nuxtEslintConfig: FlatConfigComposer): FlatConfigComposer<EslintFlatConfigItem, EslintConfigName> =>
    nuxtEslintConfig
      .prepend(buildEslintConfig({
        features: {
          vue: 'with-nuxt',
          playwright: true,
          stylistic: {
            indent: 2,
            commaDangle: 'never'
          }
        }
      }))
      .overrides(nuxtOverrides())
      .overrideRules({
        'vue/no-potential-component-option-typo': [
          'error',
          {
            presets: ['all']
          }
        ]
      })
