import { defineConfig as defineVitestConfig } from 'vitest/config'

import { workspacePackages } from './scripts/pnpm'

export default defineVitestConfig({
  test: {
    projects: workspacePackages.map(pkg => pkg.rootDir)
  }
})
