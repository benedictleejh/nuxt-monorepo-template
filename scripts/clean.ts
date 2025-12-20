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

dirsToRemove.forEach(async dir => {
  const allPackageDirs = await getWorkspaceFiles(dir)

  allPackageDirs.forEach(dir => fs.rmSync(dir, { recursive: true, force: true }))
})

filesToRemove.forEach(async filename => {
  const allPackageFiles = await getWorkspaceFiles(filename)

  allPackageFiles.forEach(file => fs.rmSync(file))
})
