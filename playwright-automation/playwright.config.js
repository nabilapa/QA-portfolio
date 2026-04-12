// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'playwright-report' }], ['list']],
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'login',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      testMatch: '**/login.spec.js',
    },
    {
      name: 'cart',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      testMatch: '**/cart.spec.js',
      dependencies: ['login'],
    },
    {
      name: 'checkout',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      testMatch: '**/inventory.spec.js',
      dependencies: ['cart'],
    },
  ],
});
