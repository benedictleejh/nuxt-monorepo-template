import type { Linter } from 'eslint'

import { createConfigForNuxt, resolveOptions } from '@nuxt/eslint-config'
import {
  describe,
  expect,
  it
} from 'vitest'

// See https://github.com/un-ts/eslint-plugin-import-x/issues/365
// eslint-disable-next-line import/no-relative-parent-imports
import { createEslintConfig, createNuxtEslintConfig } from '#eslint-config'

const getConfigDigest = (configs: Linter.Config[]) =>
  configs.map(config =>
    (JSON.parse(
      JSON.stringify({
        name: config.name,
        files: config.files,
        ignores: config.ignores,
        rules: config.rules
      }).replaceAll(process.cwd(), '<cwd>')
    ) as unknown))

describe(createEslintConfig, () => {
  it('should generate the correct config without Vue and Playwright configs', async () => {
    const config = await createEslintConfig({
      features: {
        playwright: false,
        vue: false
      }
    })

    await expect(getConfigDigest(config)).toMatchFileSnapshot('__snapshots__/base-config.ts.snap')
  })

  it('should generate the correct config with Vue config', async () => {
    const config = await createEslintConfig({
      features: {
        playwright: false,
        vue: true
      }
    })

    await expect(getConfigDigest(config)).toMatchFileSnapshot('__snapshots__/with-vue-config.ts.snap')
  })

  it('should generate the correct config with Playwright config', async () => {
    const config = await createEslintConfig({
      features: {
        playwright: true,
        vue: false
      }
    })

    await expect(getConfigDigest(config)).toMatchFileSnapshot('__snapshots__/with-playwright-config.ts.snap')
  })

  it('should generate the correct config with Vue and Playwright configs', async () => {
    const config = await createEslintConfig({
      features: {
        playwright: true,
        vue: true
      }
    })

    await expect(getConfigDigest(config)).toMatchFileSnapshot('__snapshots__/full-config.ts.snap')
  })
})

describe(createNuxtEslintConfig, () => {
  it('should generate the correct config for Nuxt', async () => {
    const nuxtConfigOptions = resolveOptions({
      features: {
        standalone: false,
        nuxt: {
          sortConfigKeys: true
        }
      },
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

    await expect(getConfigDigest(config)).toMatchFileSnapshot('__snapshots__/nuxt-config.ts.snap')
  })
})
