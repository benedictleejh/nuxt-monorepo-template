import { defineVitestProject } from '@nuxt-monorepo-template/vitest-config'

export default defineVitestProject({
  test: {
    name: 'stylelint-config',
    include: [
      'tests/**/*.{test,spec}.ts'
    ]
  }
})
