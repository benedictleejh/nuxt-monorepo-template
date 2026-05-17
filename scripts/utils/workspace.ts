import path from 'node:path'

import { findPackages } from '@pnpm/workspace.projects-reader'

const uniqWith = <T>(arr: T[], fn: (item1: T, item2: T) => boolean) =>
  arr.filter((element, index) => arr.findIndex(step => fn(element, step)) === index)

export const workspacePackages = uniqWith(await findPackages('.'), (pkg1, pkg2) => pkg1.rootDir === pkg2.rootDir)

export const getWorkspaceFiles = (filename: string) => workspacePackages.map(pkg => path.resolve(pkg.rootDir, filename))
