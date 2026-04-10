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
| BUG-001 | TC-002 | Login | Error message is not specific when password is incorrect | Minor | Medium | 🔴 Open |
| BUG-002 | TC-004 | Login | Locked out user is not redirected to support page | Minor | Low | 🔴 Open |
| BUG-003 | TC-006 | Product Catalog | Sort by 'Price (Low to High)' is inconsistent for products with equal price | Minor | Low | 🔴 Open |
| BUG-004 | TC-009 | Shopping Cart | Cart badge does not update in real-time when product is removed from catalog page | Major | High | 🔴 Open |

---

## Bug Details

### BUG-001 — Error message is not specific when password is incorrect

| Field | Detail |
|---|---|
| **Related TC** | TC-002 |
| **Module** | Login |
| **Severity** | Minor |
| **Priority** | Medium |
| **Status** | Open |

**Steps to Reproduce:**
1. Open saucedemo.com
2. Enter valid username
3. Enter wrong password
4. Click Login

**Expected Result:** Error message specifies which field is incorrect

**Actual Result:** Generic error message shown: 'Username and password do not match' — does not differentiate between username and password

**Notes:** UX issue — may confuse users

---

### BUG-002 — Locked out user is not redirected to support page

| Field | Detail |
|---|---|
| **Related TC** | TC-004 |
| **Module** | Login |
| **Severity** | Minor |
| **Priority** | Low |
| **Status** | Open |

**Steps to Reproduce:**
1. Open saucedemo.com
2. Enter locked_out_user credentials
3. Click Login

**Expected Result:** Error message includes a link or instructions to contact support

**Actual Result:** Only a plain error message is shown with no further action provided

---

### BUG-003 — Sort by 'Price (Low to High)' is inconsistent for products with equal price

| Field | Detail |
|---|---|
| **Related TC** | TC-006 |
| **Module** | Product Catalog |
| **Severity** | Minor |
| **Priority** | Low |
| **Status** | Open |

**Steps to Reproduce:**
1. Login
2. Select sort: Price (low to high)
3. Observe ordering of products with identical prices

**Expected Result:** Products with equal price are sorted consistently (e.g. alphabetically)

**Actual Result:** Order of products with identical prices is inconsistent

**Notes:** Edge case

---

### BUG-004 — Cart badge does not update in real-time when product is removed from catalog page

| Field | Detail |
|---|---|
| **Related TC** | TC-009 |
| **Module** | Shopping Cart |
| **Severity** | Major |
| **Priority** | High |
| **Status** | Open |

**Steps to Reproduce:**
1. Login
2. Add 2 products to cart
3. Go back to catalog
4. Click Remove on one product

**Expected Result:** Cart badge immediately updates to 1

**Actual Result:** Cart badge still shows 2 until the page is refreshed

