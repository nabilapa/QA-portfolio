import { Page } from '@playwright/test';

/**
 * Wait for a URL pattern to be present in the current page URL.
 * @param page - Playwright Page instance
 * @param urlPattern - Substring or regex to match against the URL
 */
export async function waitForUrl(page: Page, urlPattern: string | RegExp): Promise<void> {
  await page.waitForURL(
    typeof urlPattern === 'string'
      ? (url) => url.href.includes(urlPattern)
      : urlPattern,
  );
}

/**
 * Safely get text content of an element, returning an empty string if not found.
 * @param page - Playwright Page instance
 * @param selector - CSS selector string
 */
export async function getTextContent(page: Page, selector: string): Promise<string> {
  const element = page.locator(selector);
  return (await element.textContent()) ?? '';
}

/**
 * Retrieve text content from all elements matching a selector.
 * @param page - Playwright Page instance
 * @param selector - CSS selector string
 */
export async function getAllTextContents(page: Page, selector: string): Promise<string[]> {
  return page.locator(selector).allTextContents();
}
