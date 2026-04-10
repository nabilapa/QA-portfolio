import { test, expect } from '../fixtures/base';
import { CREDENTIALS } from '../utils/constants';

const { username, password } = CREDENTIALS.STANDARD_USER;

test.describe('Complete Purchase Flow', () => {
  /**
   * Step 1 – Login with valid credentials.
   * Verifies that the user is redirected to the inventory page.
   */
  test('Step 1: Login with valid credentials', async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.login(username, password);

    expect(loginPage.isLoginSuccessful()).toBe(true);
  });

  /**
   * Step 2 – Browse products and verify the inventory page loads correctly.
   */
  test('Step 2: Browse and verify products', async ({ loginPage, productPage }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.login(username, password);

    const productCount = await productPage.getProductCount();
    expect(productCount).toBeGreaterThan(0);

    const productNames = await productPage.getProductNames();
    const productPrices = await productPage.getProductPrices();

    expect(productNames.length).toBeGreaterThan(0);
    expect(productPrices.length).toBeGreaterThan(0);
  });

  /**
   * Step 3 – Add the first product to the cart and verify the cart badge.
   */
  test('Step 3: Add product to cart', async ({ loginPage, productPage }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.login(username, password);

    await productPage.addProductToCart(0);

    expect(await productPage.isCartBadgeDisplayed()).toBe(true);
    expect(await productPage.getCartBadgeCount()).toBe('1');
  });

  /**
   * Step 4 – Navigate to the cart and verify the added item is present.
   */
  test('Step 4: View cart and verify item', async ({ loginPage, productPage, cartPage }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.login(username, password);

    await productPage.addProductToCart(0);
    await cartPage.clickCartIcon();

    expect(await cartPage.isOnCartPage()).toBe(true);
    expect(await cartPage.getCartItemCount()).toBe(1);

    const cartItems = await cartPage.getCartItemNames();
    expect(cartItems.length).toBeGreaterThan(0);
  });

  /**
   * Step 5 – Proceed to checkout and fill in customer information.
   */
  test('Step 5: Proceed to checkout and fill information', async ({
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
  }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.login(username, password);

    await productPage.addProductToCart(0);
    await cartPage.clickCartIcon();
    await cartPage.clickCheckout();

    expect(await checkoutPage.isOnCheckoutStepOne()).toBe(true);

    await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
    await checkoutPage.clickContinue();

    expect(await checkoutPage.isOnCheckoutStepTwo()).toBe(true);
  });

  /**
   * Step 6 – Review the order summary and complete the purchase.
   */
  test('Step 6: Review order and complete purchase', async ({
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
  }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.login(username, password);

    await productPage.addProductToCart(0);
    await cartPage.clickCartIcon();
    await cartPage.clickCheckout();
    await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
    await checkoutPage.clickContinue();

    const totalPrice = await checkoutPage.getTotalPrice();
    expect(totalPrice).not.toBe('');

    await checkoutPage.clickFinish();

    expect(await checkoutPage.isOrderCompleted()).toBe(true);
  });

  /**
   * Step 7 – Verify the completion message and navigate back to the store.
   */
  test('Step 7: Verify order completion and return to home', async ({
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
  }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.login(username, password);

    await productPage.addProductToCart(0);
    await cartPage.clickCartIcon();
    await cartPage.clickCheckout();
    await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();

    const completeMessage = await checkoutPage.getCompleteMessage();
    expect(completeMessage.trim().length).toBeGreaterThan(0);

    await checkoutPage.clickBackToProducts();
    expect(loginPage.isOnInventoryPage()).toBe(true);
  });

  /**
   * Full end-to-end test: Login → Browse → Add to Cart → Checkout → Verify.
   * This single test covers the entire purchase flow.
   */
  test('Complete Purchase Flow: Login → Browse → Add to Cart → Checkout', async ({
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
  }) => {
    // Step 1 – Login
    await loginPage.navigateToLoginPage();
    await loginPage.login(username, password);
    expect(loginPage.isLoginSuccessful()).toBe(true);

    // Step 2 – Browse products
    const productCount = await productPage.getProductCount();
    expect(productCount).toBeGreaterThan(0);

    // Step 3 – Add first product to cart
    await productPage.addProductToCart(0);
    expect(await productPage.isCartBadgeDisplayed()).toBe(true);
    expect(await productPage.getCartBadgeCount()).toBe('1');

    // Step 4 – View cart
    await cartPage.clickCartIcon();
    expect(await cartPage.isOnCartPage()).toBe(true);
    expect(await cartPage.getCartItemCount()).toBe(1);

    // Step 5 – Checkout info
    await cartPage.clickCheckout();
    expect(await checkoutPage.isOnCheckoutStepOne()).toBe(true);
    await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
    await checkoutPage.clickContinue();
    expect(await checkoutPage.isOnCheckoutStepTwo()).toBe(true);

    // Step 6 – Complete purchase
    const totalPrice = await checkoutPage.getTotalPrice();
    expect(totalPrice).not.toBe('');
    await checkoutPage.clickFinish();
    expect(await checkoutPage.isOrderCompleted()).toBe(true);

    // Step 7 – Back to products
    const completeMessage = await checkoutPage.getCompleteMessage();
    expect(completeMessage.trim().length).toBeGreaterThan(0);
    await checkoutPage.clickBackToProducts();
    expect(loginPage.isOnInventoryPage()).toBe(true);
  });
});
