import stylelint from 'stylelint'
import {
  describe,
  expect,
  it
} from 'vitest'

const getConfigDigest = ({
  extends: e,
  plugins,
  ignoreFiles,
  rules,
  overrides,
  customSyntax,
  processors,
  referenceFiles,
  languageOptions
}: stylelint.Config) =>
  JSON.parse(
    JSON.stringify({
      extends: e,
      plugins:
        typeof plugins === 'string' ? plugins.split('node_modules/').at(-1)
        : Array.isArray(plugins) ? plugins.map(plugin => (
          typeof plugin === 'string'
            ? plugin.split('node_modules/').at(-1)
            : plugin))
        : plugins,
      ignoreFiles,
      rules,
      overrides,
      customSyntax: typeof customSyntax === 'string' ? customSyntax.split('node_modules/').at(-1) : customSyntax,
      processors,
      referenceFiles,
      languageOptions
    }).replaceAll(process.cwd(), '<cwd>')
  ) as unknown

describe('stylelint config', () => {
  it('should be correct for a sass file', async () => {
    const resolvedConfig = await stylelint.resolveConfig('index.sass', {
      configFile: './src/index.ts'
    }) ?? {}

    await expect(getConfigDigest(resolvedConfig)).toMatchFileSnapshot('__snapshots__/stylelint-config.ts.snap')
  })
})
