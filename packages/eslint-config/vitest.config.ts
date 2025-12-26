import tsconfigPaths from 'vite-tsconfig-paths'
import { defineProject as defineVitestProject } from 'vitest/config'

export default defineVitestProject({
  plugins: [
    tsconfigPaths()
  ],
  test: {
    name: 'eslint-config-tests',
    include: [
      'tests/**/*.{test,spec}.ts'
    ],
    environment: 'node'
  }
})
