import { defineVitestProject } from '@nuxt-monorepo-template/vitest-config'

export default defineVitestProject({
  test: {
    name: 'eslint-config',
    include: [
      'tests/**/*.{test,spec}.ts'
    ]
  }
})
