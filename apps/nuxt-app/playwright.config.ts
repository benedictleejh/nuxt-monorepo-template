import type { ConfigOptions } from '@nuxt/test-utils/playwright'
import { defineConfig, devices } from '@playwright/test'
import type { MonocartReporterOptions } from 'monocart-reporter'
import { isCI, isWindows } from 'std-env'

const devicesToTest = [
  'Desktop Chrome'

  // Test against other common browser engines.
  // 'Desktop Firefox',
  // 'Desktop Safari',

  // Test against mobile viewports.
  // 'Pixel 5',
  // 'iPhone 12',

  // Test against branded browsers.
  // { ...devices['Desktop Edge'], channel: 'msedge' },
  // { ...devices['Desktop Chrome'], channel: 'chrome' },
] satisfies (string | typeof devices[string])[]

/* See https://playwright.dev/docs/test-configuration. */
export default defineConfig<ConfigOptions>({
  testDir: './tests/e2e',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: isCI,

  /* Retry on CI only */
  retries: isCI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: isCI ? 1 : undefined,

  timeout: isWindows ? 60_000 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    [
      'monocart-reporter',
      {
        outputFile: './playwright-report/index.html'
      } satisfies MonocartReporterOptions
    ]
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    // Capture screenshot after each test failure.
    screenshot: 'only-on-failure',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Nuxt configuration options */
    nuxt: {
      rootDir: import.meta.dirname
    }
  },

  projects: devicesToTest.map(p => typeof p === 'string' ? ({ name: p, use: devices[p] }) : p)
})
