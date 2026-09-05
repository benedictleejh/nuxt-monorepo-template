import { defineProject as defineVitestProject } from 'vitest/config'

export default defineVitestProject({
  resolve: {
    tsconfigPaths: true
  },
  test: {
    name: 'eslint-config-tests',
    include: [
      'tests/**/*.{test,spec}.ts'
    ],
    environment: 'node'
  }
})
