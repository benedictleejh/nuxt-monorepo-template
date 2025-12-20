import path from 'node:path'

import { defineVitestProject } from '@nuxt/test-utils/config'
import { defineConfig as defineVitestConfig } from 'vitest/config'

export default defineVitestConfig({
  test: {
    projects: [
      {
        // TODO: remove when Nuxt Test Utils provides a way to automatically add this to the project
        resolve: {
          alias: {
            '~': path.resolve(import.meta.dirname, 'app'),
            '~~': import.meta.dirname,
            '#shared': path.resolve(import.meta.dirname, 'shared')
          }
        },
        test: {
          name: 'shared',
          include: [
            'tests/shared/utils/*.{test,spec}.ts'
          ],
          environment: 'node'
        }
      },
      {
        // TODO: remove when Nuxt Test Utils provides a way to automatically add this to the project
        resolve: {
          alias: {
            '~': path.resolve(import.meta.dirname, 'app'),
            '~~': import.meta.dirname,
            '#shared': path.resolve(import.meta.dirname, 'shared')
          }
        },
        test: {
          name: 'app:utils',
          include: [
            'tests/app/utils/*.{test,spec}.ts'
          ],
          environment: 'node'
        }
      },
      await defineVitestProject({
        test: {
          name: 'app',
          include: [
            'tests/app/{components,composables,layouts,middleware,pages,plugins}/*.{test,spec}.ts'
          ],
          environment: 'nuxt',
          environmentOptions: {
            nuxt: {
              domEnvironment: 'jsdom'
            }
          }
        }
      }),
      await defineVitestProject({
        test: {
          setupFiles: './.config/vitest.setup.ts',
          name: 'server',
          include: [
            'tests/server/{api,middleware,plugins,routes,utils}/*.{test,spec}.ts'
          ],
          environment: 'nuxt',
          environmentOptions: {
            nuxt: {
              domEnvironment: 'jsdom'
            }
          }
        }
      })
    ]
  }
})
