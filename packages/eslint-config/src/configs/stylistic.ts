import type {
  EslintConfigName,
  EslintFlatConfigItem,
  ResolvedConfig
} from '#eslint-config/utils'

import stylisticEslintPlugin from '@stylistic/eslint-plugin'
import { composer as defineFlatConfigs } from 'eslint-flat-config-utils'

export const stylistic = (config: ResolvedConfig) => {
  const baseStylisticConfig = stylisticEslintPlugin.configs.customize(config.features.stylistic)

  return defineFlatConfigs<EslintFlatConfigItem, EslintConfigName>(
    {
      name: 'nuxt-monorepo-template/stylistic',
      ...baseStylisticConfig,
      rules: {
        ...baseStylisticConfig.rules,
        '@stylistic/exp-list-style': [
          'error',
          {
            singleLine: {
              spacing: 'never',
              maxItems: 2
            },
            multiLine: {
              minItems: 0
            },
            overrides: {
              '{}': { singleLine: { spacing: 'always' } }
            }
          }
        ],
        '@stylistic/array-bracket-spacing': 'off',
        '@stylistic/array-bracket-newline': 'off',
        '@stylistic/array-element-newline': 'off',
        '@stylistic/function-call-argument-newline': 'off',
        '@stylistic/function-paren-newline': 'off',
        '@stylistic/jsx-function-call-newline': 'off',
        '@stylistic/object-curly-newline': 'off',
        '@stylistic/object-curly-spacing': 'off',
        '@stylistic/object-property-newline': 'off',
        '@stylistic/curly-newline': [
          'error',
          'always'
        ],
        '@stylistic/eol-last': 'error',
        '@stylistic/function-call-spacing': [
          'error',
          'never'
        ],
        '@stylistic/implicit-arrow-linebreak': 'off',
        '@stylistic/indent': [
          'error',
          config.features.stylistic.indent,
          {
            flatTernaryExpressions: true,
            ignoreComments: false,
            ignoredNodes: [
              'TSUnionType',
              'TSIntersectionType'
            ],
            offsetTernaryExpressions: true,
            outerIIFEBody: 1,
            tabLength: typeof config.features.stylistic.indent === 'number' ? config.features.stylistic.indent : 2,
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
        '@stylistic/jsx-child-element-spacing': 'error',
        '@stylistic/jsx-newline': 'error',
        '@stylistic/jsx-pascal-case': 'error',
        '@stylistic/exp-jsx-props-style': [
          'error',
          {
            multiLine: {
              minItems: 3,
              maxItemsPerLine: 1
            }
          }
        ],
        '@stylistic/jsx-self-closing-comp': 'error',
        '@stylistic/jsx-sort-props': 'off',
        '@stylistic/line-comment-position': 'off',
        '@stylistic/linebreak-style': 'off', // Handled by Git and EditorConfig
        '@stylistic/lines-around-comment': [
          'error',
          {
            beforeBlockComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
            allowArrayStart: true,
            allowClassStart: true,
            allowEnumStart: true,
            allowInterfaceStart: true,
            allowModuleStart: true,
            allowTypeStart: true,
            afterHashbangComment: true
          }
        ],
        '@stylistic/max-len': [
          'error',
          {
            code: 120,
            tabWidth:
              typeof config.features.stylistic.indent === 'number'
                ? config.features.stylistic.indent
                : 2,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
            ignorePattern: 'd=".*"' // Ignore inline SVG path attributes
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
        '@stylistic/multiline-comment-style': [
          'error',
          'separate-lines'
        ],
        '@stylistic/multiline-ternary': 'off',
        '@stylistic/newline-per-chained-call': 'error',
        '@stylistic/no-confusing-arrow': [
          'error',
          {
            onlyOneSimpleParam: true
          }
        ],
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/nonblock-statement-body-position': 'off', // Single-line statements are not allowed
        '@stylistic/one-var-declaration-per-line': 'error',
        '@stylistic/operator-linebreak': 'error',
        '@stylistic/padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: 'return'
          }
        ],
        '@stylistic/semi-style': 'error',
        '@stylistic/switch-colon-spacing': 'error',
        '@stylistic/wrap-regex': 'error'
      }
    }
  )
}
