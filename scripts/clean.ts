import fs from 'node:fs'

import { getWorkspaceFiles } from './pnpm'

const dirsToRemove = [
  '.output',
  '.data',
  '.nuxt',
  '.nitro',
  '.cache',
  'dist',
  'node_modules',
  'playwright-report',
  'test-results'
]

const filesToRemove = [
  'package.json'
]

dirsToRemove.forEach((dir) => {
  const allPackageDirs = getWorkspaceFiles(dir)

  allPackageDirs.forEach(pkgDir => fs.rmSync(pkgDir, { recursive: true, force: true }))
})

filesToRemove.forEach((filename) => {
  const allPackageFiles = getWorkspaceFiles(filename)

  allPackageFiles.forEach(file => fs.rmSync(file))
})
