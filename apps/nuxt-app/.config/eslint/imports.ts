import { defineFlatConfigs } from '../../.nuxt/eslint.config.mjs'

export const imports = defineFlatConfigs(
  {
    name: 'nuxt-app/imports',
    rules: {
      'import/export': 'error',
      'import/no-deprecated': 'error',
      'import/no-empty-named-blocks': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'error',

      'import/no-amd': 'error',
      'import/no-commonjs': 'error',
      'import/no-import-module-exports': 'error',
      'import/no-nodejs-modules': 'error',

      'import/default': 'error',
      'import/named': 'off', // TypeScript compilation already ensures that named imports exist in the referenced module
      'import/namespace': 'error',
      'import/no-absolute-path': 'error',
      'import/no-cycle': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-relative-packages': 'off', // Not monorepo
      'import/no-self-import': 'off', // Required for testing sometimes
      'import/no-unresolved': 'off', // Cannot handle tsconfig aliases, and should be handled by TypeScript compiler
      'import/no-useless-path-segments': 'error',
      'import/no-webpack-loader-syntax': 'error',

      'import/consistent-type-specifier-style': [
        'error',
        'prefer-top-level'
      ],
      'import/dynamic-import-chunkname': 'off', // This is not a webpack-based project
      'import/extensions': [
        'error',
        'never',
        {
          ignorePackages: true,
          pattern: {
            // For Nuxt ESLint's import of '~~/.nuxt/eslint.config.mjs'
            mjs: 'always',

            // Vue files
            vue: 'always',

            // Sass stylesheets
            sass: 'always',

            // Images
            svg: 'always',
            png: 'always',
            jpg: 'always',
            webp: 'always'
          }
        }
      ],
      'import/no-anonymous-default-export': [
        'error',
        {
          allowCallExpression: true
        }
      ],
      'import/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'internal'
          ],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ]
    }
  },
  {
    name: 'nuxt-app/imports/node-module-exceptions',
    files: [
      '*',
      '.config/**',
      'scripts/**',
      '**/server/**',
      'tests/**'
    ],
    rules: {
      'import/no-nodejs-modules': 'off'
    }
  }
)
