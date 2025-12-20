import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import StarterWelcome from '~/components/StarterWelcome.vue'
import { getComponentName } from '~~/tests/utils/app/get-component-name'

describe(getComponentName(StarterWelcome), () => {
  it('should be mountable', async () => {
    const starterWelcome = await mountSuspended(StarterWelcome)

    expect(starterWelcome.html()).toBeDefined()
  })

  it('should not contain references to app.vue', async () => {
    await renderSuspended(StarterWelcome)

    expect(screen.queryByText('app.vue', { exact: false })).toBeNull()
  })

  it('should reference index.vue', async () => {
    await renderSuspended(StarterWelcome)

    expect(screen.getByText('index.vue', { exact: false })).toBeDefined()
  })

  it('should reference app/components/StarterWelcome.vue', async () => {
    await renderSuspended(StarterWelcome)

    expect(screen.getByText('app/components/StarterWelcome.vue')).toBeDefined()
  })
})
