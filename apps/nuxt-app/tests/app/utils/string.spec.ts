import { describe, expect, it } from 'vitest'

import { upperCase } from '~/utils/string'

describe(upperCase, () => {
  it('should uppercase a string', () => {
    expect(upperCase('a')).toBe('A')
    expect(upperCase('ab')).toBe('AB')
    expect(upperCase('aBc')).toBe('ABC')
    expect(upperCase('Abcd')).toBe('ABCD')
  })
})
