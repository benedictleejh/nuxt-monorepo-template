import fs from 'node:fs'
import path from 'node:path'

const compileManifest = async (manifestFilePath: string) => {
  const yaml = await import('yaml')

  const compiledPackageManifestFilename = 'package.json'
  const fileEncoding: BufferEncoding = 'utf-8'

  const packageManifestFile = fs.readFileSync(manifestFilePath, fileEncoding)
  const packageManifest: unknown = yaml.parse(packageManifestFile)

  const indentSize = 2
  fs.writeFileSync(
    path.resolve(path.dirname(manifestFilePath), compiledPackageManifestFilename),
    JSON.stringify(packageManifest, undefined, indentSize),
    fileEncoding
  )
}

if (fs.existsSync('node_modules')) {
  const { getWorkspaceFiles } = await import('./pnpm')

  const packageManifestFilename = 'package.yaml'
  const packageManifests = await getWorkspaceFiles(packageManifestFilename)

  packageManifests.forEach(compileManifest)
}
else {
  console.info('node_modules not found, skipping compiling of package.yaml to package.json')
}
