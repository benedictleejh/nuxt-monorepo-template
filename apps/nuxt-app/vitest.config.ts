import { defineVitestProject as defineNuxtVitestProject } from '@nuxt/test-utils/config'
import { defineProject as defineVitestProject } from 'vitest/config'

const vitestProjects = async () => {
  // Workaround for https://github.com/nuxt/test-utils/issues/1408
  const nuxtAppProject = await defineNuxtVitestProject({
    test: {
      name: 'app',
      include: [
        'tests/app/{components,composables,layouts,middleware,pages,plugins}/*.{test,spec}.ts'
      ],
      environment: 'nuxt',
      environmentOptions: {
        nuxt: {
          domEnvironment: 'jsdom',
          rootDir: import.meta.dirname
        }
      }
    }
  })

  return [
    {
      // TODO: remove when Nuxt Test Utils provides a way to automatically add this to the project
      resolve: nuxtAppProject.resolve,
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
      resolve: nuxtAppProject.resolve,
      test: {
        name: 'app:utils',
        include: [
          'tests/app/utils/*.{test,spec}.ts'
        ],
        environment: 'node'
      }
    },
    nuxtAppProject,
    {
      // TODO: remove when Nuxt Test Utils provides a way to automatically add this to the project
      resolve: nuxtAppProject.resolve,
      test: {
        // These are separated out into the Node environment because these are not true unit tests, and Nuxt Test Utils
        // currently do not have a way to unit test server code properly. We use Nuxt's e2e test functions to achiveve
        // "unit testing" of a sort
        name: 'server:endpoints',
        include: [
          'tests/server/{api,routes}/*.{test,spec}.ts'
        ],
        environment: 'node'
      }
    },
    await defineNuxtVitestProject({
      plugins: [
        {
          name: 'ignore-bun-test',
          enforce: 'pre',
          resolveId: id => (id === 'bun:test'
            ? { id: 'bun:test', external: true }
            : id)
        }
      ],
      test: {
        setupFiles: 'tests/setup/index.ts',
        name: 'server',
        include: [
          'tests/server/{middleware,plugins,utils}/*.{test,spec}.ts'
        ],
        environment: 'nuxt',
        environmentOptions: {
          nuxt: {
            domEnvironment: 'jsdom',
            rootDir: import.meta.dirname
          }
        }
      }
    })
  ]
}

export default defineVitestProject({
  test: {
    projects: await vitestProjects()
  }
})
