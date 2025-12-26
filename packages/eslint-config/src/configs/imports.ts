import type { EslintConfigName, EslintFlatConfigItem } from '~/utils'

import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'
import { importX } from 'eslint-plugin-import-x'

export const imports = () => defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
  // @ts-expect-error See https://github.com/un-ts/eslint-plugin-import-x/issues/421
  {
    name: 'nuxt-monorepo-template/imports/rules',
    plugins: {
      import: importX
    },
    rules: {
      'import/export': 'error',
      'import/no-deprecated': 'error',
      'import/no-empty-named-blocks': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'error',
      // Due to packages not properly naming their default exports, due to minification or otherwise
      'import/no-rename-default': 'off',
      // See https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md#:~:text=Important,to%20be%20functional.
      'import/no-unused-modules': 'off',

      'import/no-amd': 'error',
      'import/no-commonjs': 'error',
      'import/no-import-module-exports': 'error',
      'import/no-nodejs-modules': 'error',
      'import/unambiguous': 'off', // All files are treated as ES modules, through package.json and tsconfig.json

      'import/default': 'error',
      'import/named': 'off', // TypeScript compilation already ensures that named imports exist in the referenced module
      'import/namespace': 'error',
      'import/no-absolute-path': 'error',
      'import/no-cycle': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-internal-modules': 'off',
      'import/no-relative-packages': 'error',
      'import/no-relative-parent-imports': 'error',
      'import/no-restricted-paths': 'off', // To enable when needed
      // Required for Vitest's inability to mock functions from the same module
      // See https://github.com/vitest-dev/vitest/discussions/3667#discussioncomment-15278407
      'import/no-self-import': 'off',
      'import/no-unresolved': 'off', // Cannot handle tsconfig aliases, and should be handled by TypeScript compiler
      'import/no-useless-path-segments': 'error',
      'import/no-webpack-loader-syntax': 'error',

      'import/consistent-type-specifier-style': [
        'error',
        'prefer-top-level'
      ],
      'import/dynamic-import-chunkname': 'off', // This is not a webpack-based project
      'import/exports-last': 'off',
      'import/extensions': [
        'error',
        'never',
        {
          ignorePackages: true,
          pattern: {
            // For Nuxt ESLint's import of '~~/.nuxt/eslint.config.mjs'
            mjs: 'always',

            // Allow importing data from JSON files
            json: 'always',

            // Vue files
            vue: 'always',

            // CSS stylesheets
            css: 'always',

            // Sass stylesheets
            sass: 'always',
            scss: 'always',

            // Less stylesheets
            less: 'always',

            // Stylus stylesheets
            styl: 'always',
            stylus: 'always',

            // SugarSS stylesheets
            sss: 'always',

            // Images
            svg: 'always',
            png: 'always',
            jpg: 'always',
            webp: 'always'
          }
        }
      ],
      'import/first': 'error',
      'import/group-exports': 'off',
      'import/max-dependencies': 'off',
      'import/newline-after-import': [
        'error',
        {
          count: 1,
          exactCount: true,
          considerComments: true
        }
      ],
      'import/no-anonymous-default-export': [
        'error',
        {
          allowCallExpression: true
        }
      ],
      'import/no-default-export': 'off',
      'no-duplicate-imports': 'off', // Handled by import-x rule below instead
      'import/no-duplicates': 'error',
      'import/no-named-default': 'error',
      'import/no-named-export': 'off',
      'import/no-namespace': 'error',
      'import/no-unassigned-import': [
        'error',
        {
          allow: [
            '**/*.{css,less,scss,sass,styl,stylus,pcss,postcss,sss,vue}'
          ]
        }
      ],
      'sort-imports': 'off',
      'import/order': [
        'error',
        {
          'groups': [
            'type',
            'builtin',
            'external',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'always',
          'named': {
            enabled: true,
            types: 'types-first'
          },
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true
          },
          'sortTypesGroup': true
        }
      ],
      'import/prefer-default-export': 'off',
      'import/prefer-namespace-import': 'error'
    }
  },
  {
    name: 'nuxt-monorepo-template/imports/node-module-exceptions',
    files: [
      // Config files expected in package root
      '*',

      // Config files following config-dir proposal
      '**/.config/**',

      // Package scripts
      '**/scripts/**',

      // Backend code
      '**/server/**',

      // Tests
      '**/tests/**'
    ],
    rules: {
      'import/no-nodejs-modules': 'off'
    }
  }
)
