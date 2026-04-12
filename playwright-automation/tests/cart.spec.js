const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test.describe('Cart Page - Saucedemo', () => {
  test('TC-001: Item yang ditambahkan muncul di cart', async ({ page }) => {
    // Login
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);

    // Tambah item ke cart
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addItemToCartByName('Sauce Labs Backpack');

    // Buka cart
    await inventoryPage.goToCart();
    await expect(page).toHaveURL(/cart/);

    // Verifikasi item ada di cart
    const cartPage = new CartPage(page);
    const items = await cartPage.getCartItemNames();
    expect(items).toContain('Sauce Labs Backpack');
    const count = await cartPage.getCartItemCount();
    expect(count).toBe(1);
  });
});
