import { describe, expect, it } from 'vitest'

import { add } from '~~/shared/utils/number'

describe('#add', () => {
  describe('should add 2 numbers', () => {
    it('should add 1 and 1 correctly', () => {
      expect(add(1, 1)).toBe(2)
    })

    it('should add 2 and 3 correctly', () => {
      expect(add(2, 3)).toBe(5)
    })
  })
})
