import type { RuleConfig, RulesConfig } from '@eslint/core'
import type { Linter } from 'eslint'

import type { ConfigNames, RuleDefinitions } from '#eslint-config/eslint-rules'

import { match, P } from 'ts-pattern'

export const getRulesFromEslintConfig = (configs: Linter.Config[]): Partial<RulesConfig> =>
  configs
    .map(config => config.rules)
    .filter(configRules => configRules !== undefined)
    .reduce((rulesConfig, configRules) => ({ ...rulesConfig, ...configRules }), {})

export const upgradeWarnConfigRulesToError = (rules: Partial<RulesConfig>) => {
  const fixedRules =
    Object.entries(rules)
      .map(([ruleName, config]) =>
        match(config)
          .returnType<[string, RuleConfig | undefined]>()
          .with([P.union('warn', 1), ...P.array()], ([_, ...ruleConfig]) => [ruleName, ['error', ...ruleConfig]])
          .with(P.union('warn', 1), () => [ruleName, 'error'])
          .otherwise(() => [ruleName, config]))

  return Object.fromEntries(fixedRules)
}

export type EslintRules = RulesConfig & RuleDefinitions

export type EslintFlatConfigItem = Linter.Config<EslintRules>

export type EslintConfigName = ConfigNames
