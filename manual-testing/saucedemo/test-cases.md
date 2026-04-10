# Test Cases — SauceDemo

**Application Under Test:** [SauceDemo](https://www.saucedemo.com)  
**Tester:** Nabilah Putri Aprilia  
**Type:** Manual Testing — Functional & Negative  
**Total Test Cases:** 13

---

## Summary

| Module | Total TC | Pass | Fail |
|---|---|---|---|
| Login | 4 | 4 | 0 |
| Product Catalog | 3 | 3 | 0 |
| Shopping Cart | 3 | 3 | 0 |
| Checkout | 2 | 2 | 0 |
| Logout | 1 | 1 | 0 |
| **Total** | **13** | **13** | **0** |

---

## Login

| TC ID | Test Scenario | Test Data | Expected Result | Actual Result | Status | Priority | Notes |
|---|---|---|---|---|---|---|---|
| TC-001 | Login with valid credentials | username: standard_user / password: secret_sauce | User is redirected to the Products page | User is redirected to the Products page | PASS | High | |
| TC-002 | Login with invalid password | username: standard_user / password: wrongpass | Error message displayed: 'Username and password do not match' | Error message displayed: 'Epic sadface: Username and password do not match' | PASS | High | Error message prefixed with "Epic sadface:" |
| TC-003 | Login with empty fields | username: (empty) / password: (empty) | Error message displayed: 'Username is required' | Error message displayed: 'Epic sadface: Username is required' | PASS | High | Error message prefixed with "Epic sadface:" |
| TC-004 | Login with locked out user | username: locked_out_user / password: secret_sauce | Error message displayed: 'Sorry, this user has been locked out' | Error message displayed: 'Epic sad face: Sorry, this user has been locked out' | PASS | Medium | Error message prefixed with "Epic sadface:" |

---

## Product Catalog

| TC ID | Test Scenario | Test Data | Expected Result | Actual Result | Status | Priority | Notes |
|---|---|---|---|---|---|---|---|
| TC-005 | Verify products are displayed after login | - | Page displays 6 products with name, price, and Add to Cart button | Page displays 6 products with name, price and Add to Cart button | PASS | High | |
| TC-006 | Sort products by price (Low to High) | - | Products are sorted from lowest to highest price | Products are sorted from lowest to highest price, starting from $7.99 (Sauce Labs Onesie) to $49.99 (Sauce Labs Fleece Jacket) | PASS | Medium | |
| TC-007 | Sort products by name (A to Z) | - | Products are sorted alphabetically A–Z | Products are sorted alphabetically A–Z, starting from 'Sauce Labs Backpack' to 'Test.allTheThings() T-Shirt (Red)' | PASS | Medium | |

---

## Shopping Cart

| TC ID | Test Scenario | Test Data | Expected Result | Actual Result | Status | Priority | Notes |
|---|---|---|---|---|---|---|---|
| TC-008 | Add one product to cart | - | Cart badge shows 1, product appears in Cart page | Cart badge shows 1, product 'Sauce Labs Backpack' appears in Cart page with correct name and price | PASS | High | |
| TC-009 | Add multiple products to cart | - | Cart badge shows 3, all products appear in Cart page | Cart badge shows 3, all 3 selected products appear in Cart page with correct names and prices | PASS | High | |
| TC-010 | Remove product from cart | - | Product is removed from cart, badge returns to empty | Product is removed from cart, badge returns to empty and Cart page shows no items | PASS | High | |

---

## Checkout

| TC ID | Test Scenario | Test Data | Expected Result | Actual Result | Status | Priority | Notes |
|---|---|---|---|---|---|---|---|
| TC-011 | Checkout with complete data | First Name: John / Last Name: Doe / Zip: 12345 | Order is successful, 'Thank you for your order' page is displayed | Checkout Overview page displays payment information, shipping information, and price total correctly. After clicking Finish, 'Thank you for your order' page is displayed | PASS | High | Checkout flow includes Overview page before final confirmation |
| TC-012 | Checkout with empty First Name | First Name: (empty) / Last Name: Doe / Zip: 12345 | Error message displayed: 'First Name is required' | Error message displayed: 'First Name is required' | PASS | High | |

---

## Logout

| TC ID | Test Scenario | Test Data | Expected Result | Actual Result | Status | Priority | Notes |
|---|---|---|---|---|---|---|---|
| TC-013 | Logout successfully | - | User is redirected back to the Login page | User is redirected back to the Login page | PASS | Medium | |

---

## Bugs Found

| Bug ID | Related TC | Module | Bug Title | Severity | Priority | Status |
|---|---|---|---|---|---|---|
| BUG-001 | TC-002 | Login | Error message is not specific when password is incorrect | Minor | Medium | Open |
| BUG-002 | TC-004 | Login | Locked out user is not redirected to support page | Minor | Low | Open |
| BUG-003 | TC-006 | Product Catalog | Sort by 'Price (Low to High)' is inconsistent for products with equal price | Minor | Low | Open |
| BUG-004 | TC-009 | Shopping Cart | Cart badge does not update in real-time when product is removed from catalog page | Major | High | Open |

> Full bug report with steps to reproduce: [bug-report.xlsx](./QA_Portfolio_-_Test_Case_and_Bug_Report_-_Nabilah_Putri_Aprilia.xlsx)

---

*Last updated: April 2026*


## Test Design Techniques Used

- **Equivalence Partitioning** — Input grouped into valid, invalid, 
  and edge-case partitions (e.g. valid login, wrong password, locked user)
- **Boundary Value Analysis** — Tested boundary conditions such as 
  empty fields and minimum required inputs
- **Positive & Negative Testing** — Both expected success flows and 
  error handling scenarios are covered
- **Basic User Flow Coverage** — End-to-end user journey from Login 
  to Logout is fully tested
