import { defineConfig as defineBuildConfig } from 'tsdown'

export default defineBuildConfig({
  entry: 'src/index.ts',
  dts: {
    sourcemap: true
  }
})
