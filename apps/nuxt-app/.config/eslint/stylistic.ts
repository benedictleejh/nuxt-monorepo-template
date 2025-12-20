import { defineFlatConfigs } from '../../.nuxt/eslint.config.mjs'

export const stylistic = defineFlatConfigs(
  {
    name: 'nuxt-app/stylistic',
    rules: {
      '@stylistic/object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            minProperties: 3,
            consistent: true,
            multiline: true
          },
          ObjectPattern: {
            consistent: true,
            multiline: true
          },
          ImportDeclaration: {
            minProperties: 5,
            multiline: true,
            consistent: true
          },
          ExportDeclaration: {
            minProperties: 5,
            multiline: true,
            consistent: true
          },
          TSTypeLiteral: 'always',
          TSEnumBody: 'always',
          TSInterfaceBody: 'always'
        }
      ],
      // '@stylistic/object-property-newline': [
      //   'error',
      //   {
      //     ObjectExpression: {
      //       minProperties: 3,
      //       consistent: true,
      //       multiline: true
      //     },
      //     ObjectPattern: {
      //       consistent: true,
      //       multiline: true
      //     },
      //     ImportDeclaration: {
      //       minProperties: 5,
      //       multiline: true,
      //       consistent: true
      //     },
      //     ExportDeclaration: {
      //       minProperties: 5,
      //       multiline: true,
      //       consistent: true
      //     },
      //     TSTypeLiteral: 'always',
      //     TSEnumBody: 'always',
      //     TSInterfaceBody: 'always'
      //   }
      // ],
      '@stylistic/array-bracket-newline': [
        'error',
        'consistent'
      ],
      '@stylistic/array-element-newline': [
        'error',
        {
          ArrayExpression: {
            minItems: 3,
            consistent: true,
            multiline: true
          },
          ArrayPattern: {
            consistent: true,
            multiline: true
          }
        }
      ],
      '@stylistic/curly-newline': [
        'error',
        'always'
      ],
      '@stylistic/eol-last': 'error',
      '@stylistic/function-call-argument-newline': [
        'error',
        'consistent'
      ],
      '@stylistic/function-call-spacing': [
        'error',
        'never'
      ],
      '@stylistic/function-paren-newline': [
        'error',
        'multiline-arguments'
      ],
      '@stylistic/indent': [
        'error',
        2,
        {
          flatTernaryExpressions: true,
          ignoreComments: false,
          ignoredNodes: [
            'TSUnionType',
            'TSIntersectionType'
          ],
          offsetTernaryExpressions: true,
          outerIIFEBody: 1,
          tabLength: 2,
          ArrayExpression: 1,
          CallExpression: { arguments: 1 },
          FunctionDeclaration: {
            body: 1,
            parameters: 1,
            returnType: 1
          },
          FunctionExpression: {
            body: 1,
            parameters: 1,
            returnType: 1
          },
          ImportDeclaration: 1,
          MemberExpression: 1,
          ObjectExpression: 1,
          SwitchCase: 1,
          VariableDeclarator: 1
        }
      ],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'none'
          },
          singleline: {
            delimiter: 'comma'
          }
        }
      ],
      '@stylistic/newline-per-chained-call': 'error',
      '@stylistic/switch-colon-spacing': 'error',
      '@stylistic/wrap-regex': 'error',
      '@stylistic/multiline-ternary': 'off'
    }
  }
)
