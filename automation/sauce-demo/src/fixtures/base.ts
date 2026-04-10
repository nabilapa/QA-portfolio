import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

/** Shape of the custom fixtures provided to each test. */
export type Fixtures = {
  loginPage: LoginPage;
  productPage: ProductPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
};

/**
 * Extended Playwright `test` object that automatically initialises all page
 * objects and makes them available inside every test via destructuring.
 *
 * @example
 * ```ts
 * import { test } from '../fixtures/base';
 *
 * test('my test', async ({ loginPage, productPage }) => { ... });
 * ```
 */
export const test = base.extend<Fixtures>({
  loginPage: async ({ page }: { page: Page }, use: (r: LoginPage) => Promise<void>) => {
    await use(new LoginPage(page));
  },

  productPage: async ({ page }: { page: Page }, use: (r: ProductPage) => Promise<void>) => {
    await use(new ProductPage(page));
  },

  cartPage: async ({ page }: { page: Page }, use: (r: CartPage) => Promise<void>) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }: { page: Page }, use: (r: CheckoutPage) => Promise<void>) => {
    await use(new CheckoutPage(page));
  },
});

export { expect } from '@playwright/test';
