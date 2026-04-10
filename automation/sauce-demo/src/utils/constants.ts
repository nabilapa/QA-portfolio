/** Base URL for SauceDemo */
export const BASE_URL = process.env.BASE_URL || 'https://www.saucedemo.com';

/** Application URLs */
export const URLS = {
  LOGIN: '/',
  INVENTORY: '/inventory.html',
  CART: '/cart.html',
  CHECKOUT_STEP_ONE: '/checkout-step-one.html',
  CHECKOUT_STEP_TWO: '/checkout-step-two.html',
  CHECKOUT_COMPLETE: '/checkout-complete.html',
} as const;

/** Test credentials */
export const CREDENTIALS = {
  STANDARD_USER: {
    username: process.env.SAUCE_USERNAME || 'standard_user',
    password: process.env.SAUCE_PASSWORD || 'secret_sauce',
  },
} as const;

/** CSS Selectors */
export const SELECTORS = {
  // Login page
  LOGIN: {
    USERNAME: '#user-name',
    PASSWORD: '#password',
    BUTTON: '#login-button',
    ERROR_MESSAGE: '[data-test="error"]',
  },
  // Navigation
  NAV: {
    CART_ICON: '.shopping_cart_link',
    CART_BADGE: '.shopping_cart_badge',
  },
  // Product / Inventory page
  PRODUCT: {
    ITEM: '.inventory_item',
    NAME: '.inventory_item_name',
    PRICE: '.inventory_item_price',
    ADD_TO_CART_BUTTON: '.btn_inventory',
  },
  // Cart page
  CART: {
    ITEM: '.cart_item',
    ITEM_NAME: '.inventory_item_name',
    CHECKOUT_BUTTON: '#checkout',
  },
  // Checkout step one
  CHECKOUT_ONE: {
    FIRST_NAME: '#first-name',
    LAST_NAME: '#last-name',
    POSTAL_CODE: '#postal-code',
    CONTINUE_BUTTON: '#continue',
  },
  // Checkout step two
  CHECKOUT_TWO: {
    FINISH_BUTTON: '#finish',
    ITEM_TOTAL: '.summary_subtotal_label',
    TOTAL: '.summary_total_label',
    CART_ITEM: '.cart_item',
    ITEM_NAME: '.inventory_item_name',
  },
  // Checkout complete
  CHECKOUT_COMPLETE: {
    COMPLETE_HEADER: '.complete-header',
    BACK_TO_PRODUCTS: '#back-to-products',
  },
} as const;

/** Customer info used in checkout tests */
export const TEST_CUSTOMER = {
  FIRST_NAME: 'John',
  LAST_NAME: 'Doe',
  ZIP_CODE: '12345',
} as const;
