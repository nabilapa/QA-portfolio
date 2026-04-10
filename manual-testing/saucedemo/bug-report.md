# Bug Report — SauceDemo

**Application Under Test:** [SauceDemo](https://www.saucedemo.com)  
**Tester:** Nabilah Putri Aprilia  
**Total Bugs Found:** 4

---

## Summary

| Severity | Count |
|---|---|
| Major | 1 |
| Minor | 3 |
| **Total** | **4** |

---

## Bug List

| Bug ID | Related TC | Module | Bug Title | Severity | Priority | Status |
|---|---|---|---|---|---|---|
| BUG-001 | TC-002 | Login | Error message is not specific when password is incorrect | Minor | Medium | Open |
| BUG-002 | TC-004 | Login | Locked out user is not redirected to support page | Minor | Low | Open |
| BUG-003 | TC-006 | Product Catalog | Sort by 'Price (Low to High)' is inconsistent for products with equal price | Minor | Low | Open |
| BUG-004 | TC-009 | Shopping Cart | Cart badge does not update in real-time when product is removed from catalog page | Major | High | Open |

---

## Bug Details

| Bug ID | Bug Title | TC | Module | Steps to Reproduce | Expected Result | Actual Result | Notes |
|---|---|---|---|---|---|---|---|
| **BUG-001** | Error message is not specific when password is incorrect | TC-002 | Login | 1. Open saucedemo.com<br>2. Enter valid username<br>3. Enter wrong password<br>4. Click Login | Error message specifies which field is incorrect | Generic error message shown: 'Username and password do not match' — does not differentiate between username and password | UX issue — may confuse users |
| **BUG-002** | Locked out user is not redirected to support page | TC-004 | Login | 1. Open saucedemo.com<br>2. Enter locked_out_user credentials<br>3. Click Login | Error message includes a link or instructions to contact support | Only a plain error message is shown with no further action provided | — |
| **BUG-003** | Sort by 'Price (Low to High)' is inconsistent for products with equal price | TC-006 | Product Catalog | 1. Login<br>2. Select sort: Price (low to high)<br>3. Observe ordering of products with identical prices | Products with equal price are sorted consistently (e.g. alphabetically) | Order of products with identical prices is inconsistent | Edge case |
| **BUG-004** | Cart badge does not update in real-time when product is removed from catalog page | TC-009 | Shopping Cart | 1. Login<br>2. Add 2 products to cart<br>3. Go back to catalog<br>4. Click Remove on one product | Cart badge immediately updates to 1 | Cart badge still shows 2 until the page is refreshed | — |

---

*Last updated: April 2026*
