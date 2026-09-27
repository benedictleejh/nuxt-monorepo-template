import { defineVitestConfig, defineVitestProject } from '@nuxt-monorepo-template/vitest-config'

export default defineVitestConfig({
  test: {
    projects: [
      defineVitestProject({
        test: {
          name: 'vitest-config',
          include: [
            'tests/**/*.{test,spec}.ts'
          ]
        }
      })
    ],
    passWithNoTests: true
  }
})
