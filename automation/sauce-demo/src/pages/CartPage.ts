import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { SELECTORS, URLS } from '../utils/constants';

/** Page object for the SauceDemo cart page. */
export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /** Click the shopping cart icon to navigate to the cart page. */
  async clickCartIcon(): Promise<void> {
    await this.page.locator(SELECTORS.NAV.CART_ICON).click();
    await this.page.waitForURL(`**${URLS.CART}`);
  }

  /** Return the number of items currently in the cart. */
  async getCartItemCount(): Promise<number> {
    return this.page.locator(SELECTORS.CART.ITEM).count();
  }

  /** Return the names of all items in the cart. */
  async getCartItemNames(): Promise<string[]> {
    return this.page.locator(SELECTORS.CART.ITEM_NAME).allTextContents();
  }

  /** Return true when the current URL is the cart page. */
  async isOnCartPage(): Promise<boolean> {
    return this.isOnPage(URLS.CART);
  }

  /** Click the "Checkout" button on the cart page. */
  async clickCheckout(): Promise<void> {
    await this.page.locator(SELECTORS.CART.CHECKOUT_BUTTON).click();
    await this.page.waitForURL(`**${URLS.CHECKOUT_STEP_ONE}`);
  }
}
