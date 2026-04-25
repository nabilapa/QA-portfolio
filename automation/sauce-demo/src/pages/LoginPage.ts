import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { SELECTORS, URLS } from '../utils/constants';

/** Page object for the SauceDemo login page. */
export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /** Navigate to the login page. */
  async navigateToLoginPage(): Promise<void> {
    await this.navigate(URLS.LOGIN);
  }

  /**
   * Fill in credentials and submit the login form.
   * @param username - SauceDemo username
   * @param password - SauceDemo password
   */
  async login(username: string, password: string): Promise<void> {
    await this.page.locator(SELECTORS.LOGIN.USERNAME).fill(username);
    await this.page.locator(SELECTORS.LOGIN.PASSWORD).fill(password);
    await this.page.locator(SELECTORS.LOGIN.BUTTON).click();
  }

  /** Return true when the browser is on the inventory page (i.e. login succeeded). */
  isLoginSuccessful(): boolean {
    return this.isOnInventoryPage();
  }

  /** Return true when the current URL points to the inventory page. */
  isOnInventoryPage(): boolean {
    return this.isOnPage(URLS.INVENTORY);
  }
}
