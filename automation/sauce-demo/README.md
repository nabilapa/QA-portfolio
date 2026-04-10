# SauceDemo Playwright Automation

End-to-end automation tests for the [SauceDemo](https://www.saucedemo.com) e-commerce application built with **Playwright** and **TypeScript**.

## Features

- Complete purchase flow (login → browse → add to cart → checkout → order confirmation)
- Page Object Model (POM) pattern
- Custom Playwright fixtures for clean test setup/teardown
- TypeScript throughout
- Screenshots and videos captured on failure
- HTML test report

---

## Project Structure

```
automation/sauce-demo/
├── src/
│   ├── fixtures/
│   │   └── base.ts                    # Custom test fixture with page objects
│   ├── pages/
│   │   ├── BasePage.ts                # Abstract base page
│   │   ├── LoginPage.ts               # Login page object
│   │   ├── ProductPage.ts             # Inventory / product listing page object
│   │   ├── CartPage.ts                # Shopping cart page object
│   │   └── CheckoutPage.ts            # Multi-step checkout page object
│   ├── tests/
│   │   └── complete-purchase-flow.spec.ts  # E2E tests
│   └── utils/
│       ├── constants.ts               # URLs, credentials, selectors
│       └── helpers.ts                 # Reusable helper functions
├── .env.example                       # Environment variable template
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

---

## Setup

```bash
# 1. Navigate to the project directory
cd automation/sauce-demo

# 2. Install Node dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

# 4. (Optional) Copy .env.example and set your own values
cp .env.example .env
```

---

## Running Tests

```bash
# Run all tests (headless)
npx playwright test

# Run tests in headed (visible browser) mode
npx playwright test --headed

# Run tests in debug mode (step through each action)
npx playwright test --debug

# Run a specific test file
npx playwright test src/tests/complete-purchase-flow.spec.ts

# Run a specific test by title
npx playwright test -g "Complete Purchase Flow"
```

---

## Test Report

After a test run, an HTML report is generated:

```bash
npx playwright show-report
```

---

## Environment Variables

| Variable        | Default                    | Description                  |
|-----------------|----------------------------|------------------------------|
| `BASE_URL`      | `https://www.saucedemo.com`| Application base URL         |
| `SAUCE_USERNAME`| `standard_user`            | Login username               |
| `SAUCE_PASSWORD`| `secret_sauce`             | Login password               |
| `HEADLESS`      | `true`                     | Run browser in headless mode |
| `SLOW_MO`       | `0`                        | Slow down actions (ms)       |

Copy `.env.example` to `.env` and update as needed.

---

## Test Coverage

| Test | Description |
|------|-------------|
| Step 1 | Login with valid credentials |
| Step 2 | Browse and verify products on inventory page |
| Step 3 | Add a product to the cart |
| Step 4 | View cart and verify added item |
| Step 5 | Proceed to checkout and fill customer information |
| Step 6 | Review order and complete purchase |
| Step 7 | Verify order completion message and return to home |
| E2E   | Full purchase flow (single test covering all 7 steps) |
