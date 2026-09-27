import type { Plugin, TestProjectInlineConfiguration } from 'vitest/config'

import { defineVitestProject as defineNuxtTestUtilsVitestProject } from '@nuxt/test-utils/config'
import defu from 'defu'
import { defineConfig, defineProject } from 'vitest/config'

const ignoreBunTestPlugin = {
  name: 'ignore-bun-test',
  enforce: 'pre',
  resolveId: id =>
    (id === 'bun:test'
      ? { id: 'bun:test', external: true }
      : undefined)
} satisfies Plugin

export const defineNuxtVitestProject = (config: TestProjectInlineConfiguration) => defineNuxtTestUtilsVitestProject(
  defu(
    config,
    {
      // Due to @nuxt/test-utils defaulting `extends` to false
      extends: true,
      plugins: [
        ignoreBunTestPlugin
      ],
      test: {
        environment: 'nuxt',
        environmentOptions: {
          nuxt: {
            domEnvironment: 'jsdom',
            rootDir: '.'
          }
        }
      }
    } satisfies TestProjectInlineConfiguration
  )
)

export const defineVitestProject = (config: TestProjectInlineConfiguration) => defineProject(
  defu(
    config,
    {
      resolve: {
        tsconfigPaths: true
      },
      test: {
        environment: 'node'
      }
    } satisfies TestProjectInlineConfiguration
  )
)

export const defineVitestConfig = defineConfig

export const defineNuxtVitestConfig = async () => defineVitestConfig({
  test: {
    projects: [
      defineVitestProject({
        test: {
          name: 'shared',
          include: [
            '**/tests/shared/utils/**/*.{test,spec}.ts'
          ]
        }
      }),
      defineVitestProject({
        test: {
          name: 'app:utils',
          include: [
            '**/tests/app/utils/**/*.{test,spec}.ts'
          ]
        }
      }),
      await defineNuxtVitestProject({
        test: {
          name: 'app',
          include: [
            '**/tests/app/{components,composables,layouts,middleware,pages,plugins}/**/*.{test,spec}.ts'
          ]
        }
      }),
      defineVitestProject({
        test: {
          // These are separated out into the Node environment because these are not true unit tests, and Nuxt Test
          // Utils currently do not have a way to unit test server code properly. We use Nuxt's e2e test functions to
          //  achiveve "unit testing" of a sort
          name: 'server:endpoints',
          include: [
            '**/tests/server/{api,routes}/**/*.{test,spec}.ts'
          ]
        }
      }),
      await defineNuxtVitestProject({
        test: {
          name: 'server',
          include: [
            '**/tests/server/{middleware,plugins,utils}/**/*.{test,spec}.ts'
          ]
        }
      })
    ]
  }
})
