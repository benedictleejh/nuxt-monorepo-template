import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'

import { defu } from 'defu'

// type DeepRequired<T> = Required<{
//   [K in keyof T]: T[K] extends Required<T[K]> ? T[K] : DeepRequired<T[K]>
// }>

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T

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
    stylistic: Required<Pick<StylisticCustomizeOptions, 'indent' | 'commaDangle'>>
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
  } satisfies DeepPartial<ResolvedConfig>

  return defu(translatedConfig, defaultConfig)
}
