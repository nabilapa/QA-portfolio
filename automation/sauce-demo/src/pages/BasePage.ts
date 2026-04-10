import { Page } from '@playwright/test';

/** Abstract base class shared by all page objects. */
export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /** Navigate to a path relative to the base URL configured in playwright.config.ts. */
  async navigate(path: string = '/'): Promise<void> {
    await this.page.goto(path);
  }

  /** Return the current page URL. */
  getCurrentUrl(): string {
    return this.page.url();
  }

  /** Check whether the current URL contains the given substring. */
  isOnPage(urlSubstring: string): boolean {
    return this.page.url().includes(urlSubstring);
  }
}
