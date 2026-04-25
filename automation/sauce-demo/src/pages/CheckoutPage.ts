import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { SELECTORS, URLS } from '../utils/constants';

/** Page object covering the multi-step SauceDemo checkout flow. */
export class CheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /** Return true when the browser is on checkout step one (customer info). */
  async isOnCheckoutStepOne(): Promise<boolean> {
    return this.isOnPage(URLS.CHECKOUT_STEP_ONE);
  }

  /**
   * Fill in customer information on checkout step one.
   * @param firstName - Customer first name
   * @param lastName  - Customer last name
   * @param zipCode   - Customer postal / zip code
   */
  async fillCheckoutInfo(firstName: string, lastName: string, zipCode: string): Promise<void> {
    await this.page.locator(SELECTORS.CHECKOUT_ONE.FIRST_NAME).fill(firstName);
    await this.page.locator(SELECTORS.CHECKOUT_ONE.LAST_NAME).fill(lastName);
    await this.page.locator(SELECTORS.CHECKOUT_ONE.POSTAL_CODE).fill(zipCode);
  }

  /** Click the "Continue" button on checkout step one. */
  async clickContinue(): Promise<void> {
    await this.page.locator(SELECTORS.CHECKOUT_ONE.CONTINUE_BUTTON).click();
    await this.page.waitForURL(`**${URLS.CHECKOUT_STEP_TWO}`);
  }

  /** Return true when the browser is on checkout step two (order review). */
  async isOnCheckoutStepTwo(): Promise<boolean> {
    return this.isOnPage(URLS.CHECKOUT_STEP_TWO);
  }

  /** Return the total price string displayed on the order review page. */
  async getTotalPrice(): Promise<string> {
    return (await this.page.locator(SELECTORS.CHECKOUT_TWO.TOTAL).textContent()) ?? '';
  }

  /** Click the "Finish" button to submit the order. */
  async clickFinish(): Promise<void> {
    await this.page.locator(SELECTORS.CHECKOUT_TWO.FINISH_BUTTON).click();
    await this.page.waitForURL(`**${URLS.CHECKOUT_COMPLETE}`);
  }

  /** Return true when the browser is on the order completion page. */
  async isOrderCompleted(): Promise<boolean> {
    return this.isOnPage(URLS.CHECKOUT_COMPLETE);
  }

  /** Return the completion header message (e.g. "Thank you for your order!"). */
  async getCompleteMessage(): Promise<string> {
    return (
      (await this.page.locator(SELECTORS.CHECKOUT_COMPLETE.COMPLETE_HEADER).textContent()) ?? ''
    );
  }

  /** Click the "Back Home" button to return to the inventory page. */
  async clickBackToProducts(): Promise<void> {
    await this.page.locator(SELECTORS.CHECKOUT_COMPLETE.BACK_TO_PRODUCTS).click();
    await this.page.waitForURL(`**${URLS.INVENTORY}`);
  }
}
