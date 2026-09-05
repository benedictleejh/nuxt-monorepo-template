import { defineProject as defineVitestProject } from 'vitest/config'

export default defineVitestProject({
  test: {
    name: 'stylelint-config-tests',
    include: [
      'tests/**/*.{test,spec}.ts'
    ],
    environment: 'node'
  }
})
