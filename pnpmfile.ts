import type { PackageJson } from 'type-fest'

const readPackage = (pkg: PackageJson) => {
  if (pkg.name === 'stylelint-config-inspector') {
    // Remove unnecessary optional dependencies that should have been dev dependencies
    delete pkg.optionalDependencies
  }

  return pkg
}

export const hooks = {
  readPackage
}
