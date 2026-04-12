# Playwright Automation - Saucedemo

End-to-end automation tests for [Saucedemo](https://www.saucedemo.com) using Playwright.

## Project Structure

```
playwright-automation/
├── pages/
│   ├── LoginPage.js        # Page Object for Login
│   └── InventoryPage.js    # Page Object for Inventory/Products
├── tests/
│   ├── login.spec.js       # Login test cases
│   └── inventory.spec.js   # Inventory/Product test cases
├── playwright.config.js    # Playwright configuration
└── package.json
```

## Test Coverage

| Feature    | Test Cases |
|------------|-----------|
| Login      | 5         |
| Inventory  | 4         |

## Setup & Run

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run all tests
npm test

# Run with UI mode
npm run test:ui

# View HTML report
npm run report
```

## Browsers

Tests run on **Chromium** and **Firefox** by default.
