import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { SELECTORS } from '../utils/constants';

/** Page object for the SauceDemo inventory / product listing page. */
export class ProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /** Return the total number of products displayed on the page. */
  async getProductCount(): Promise<number> {
    return this.page.locator(SELECTORS.PRODUCT.ITEM).count();
  }

  /** Return all product names shown on the page. */
  async getProductNames(): Promise<string[]> {
    return this.page.locator(SELECTORS.PRODUCT.NAME).allTextContents();
  }

  /** Return all product prices shown on the page. */
  async getProductPrices(): Promise<string[]> {
    return this.page.locator(SELECTORS.PRODUCT.PRICE).allTextContents();
  }

  /**
   * Click the "Add to cart" button for a product at the given zero-based index.
   * @param index - Zero-based index of the product to add
   */
  async addProductToCart(index: number): Promise<void> {
    const buttons = this.page.locator(SELECTORS.PRODUCT.ADD_TO_CART_BUTTON);
    await buttons.nth(index).click();
  }

  /** Return the text shown in the cart badge (e.g. "1"). */
  async getCartBadgeCount(): Promise<string> {
    return (await this.page.locator(SELECTORS.NAV.CART_BADGE).textContent()) ?? '0';
  }

  /** Return true when the cart badge is visible. */
  async isCartBadgeDisplayed(): Promise<boolean> {
    return this.page.locator(SELECTORS.NAV.CART_BADGE).isVisible();
  }
}
