const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Feature - Saucedemo', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('TC-001: Successful login with valid credentials', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('TC-002: Login fails with invalid password', async ({ page }) => {
    await loginPage.login('standard_user', 'wrong_password');
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Username and password do not match');
  });

  test('TC-003: Login fails with empty credentials', async ({ page }) => {
    await loginPage.login('', '');
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Username is required');
  });

  test('TC-004: Login fails with locked out user', async ({ page }) => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Sorry, this user has been locked out');
  });

  test('TC-005: Login fails with empty username only', async ({ page }) => {
    await loginPage.login('', 'secret_sauce');
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('Username is required');
  });
});
