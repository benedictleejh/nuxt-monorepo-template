import path from 'node:path'

import { findPackages } from '@pnpm/workspace.projects-reader'

const uniqWith = <T>(array: T[], isEqual: (item1: T, item2: T) => boolean) =>
  array.filter((element, index) => array.findIndex(step => isEqual(element, step)) === index)

export const workspacePackages = uniqWith(
  await findPackages('.'),
  (package1, package2) => package1.rootDir === package2.rootDir
)

export const getWorkspaceFiles = (filename: string) =>
  workspacePackages.map(workspacePackage => path.resolve(workspacePackage.rootDir, filename))
