import { defineConfig as defineVitestConfig } from 'vitest/config'

import { workspacePackages } from './scripts/utils/workspace'

export default defineVitestConfig({
  test: {
    projects: workspacePackages.map(pkg => pkg.rootDir)
  }
})
