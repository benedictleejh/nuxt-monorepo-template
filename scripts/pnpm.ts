import path from 'node:path'
import { readWorkspaceManifest } from '@pnpm/workspace.read-manifest'
import { globSync } from 'glob'

export const getWorkspaceFiles = async (filename: string) => {
  const workspacePackages = (await readWorkspaceManifest('.'))?.packages ?? []
  const files = globSync([
    filename,
    ...workspacePackages.map(packagePath => path.resolve(packagePath, filename))
  ])

  return files
}
