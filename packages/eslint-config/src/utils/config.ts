import type { StylisticCustomizeOptions, UnprefixedRuleOptions } from '@stylistic/eslint-plugin'
import type { PartialDeep } from 'type-fest'

import { defu } from 'defu'

export type Config = {
  features: {
    /**
     * Whether to include Vue related ESLint rules
     */
    vue: boolean

    /**
     * Whether to include Playwright ESLint rules
     */
    playwright: boolean
  }
}

export type ResolvedConfig = {
  features: {
    vue: 'with-nuxt' | 'vue-only' | false
    playwright: boolean
    stylistic: Required<Pick<StylisticCustomizeOptions, 'commaDangle'>> & {
      indent: NonNullable<UnprefixedRuleOptions['indent'][0]>
    }
  }
}

const defaultConfig: ResolvedConfig = {
  features: {
    stylistic: {
      indent: 2,
      commaDangle: 'never'
    },
    vue: false,
    playwright: false
  }
}

export const resolveConfig = (config: Config): ResolvedConfig => {
  const translatedConfig = {
    features: {
      ...config.features,
      vue: config.features.vue ? 'vue-only' : config.features.vue
    }
  } satisfies PartialDeep<ResolvedConfig>

  return defu(translatedConfig, defaultConfig)
}
