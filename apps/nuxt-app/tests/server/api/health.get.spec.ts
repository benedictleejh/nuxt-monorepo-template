import {
  $fetch,
  fetch,
  setup
} from '@nuxt/test-utils'
import {
  describe,
  expect,
  it
} from 'vitest'

describe('/api/health', async () => {
  await setup({
    server: true
  })

  it(`should return status 'ok'`, async () => {
    const response = await $fetch('/api/health')

    expect(response.status).toBe('ok')
  })

  it('should return status code 200', async () => {
    const response = await fetch('/api/health')

    expect(response.status).toBe(200)
  })
})
