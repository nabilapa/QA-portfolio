# Test Plan — SauceDemo E-Commerce

**Version:** 1.0  
**Author:** Nabilah Putri Aprilia  
**Date:** April 2026  
**Application Under Test:** [SauceDemo](https://www.saucedemo.com)

---

## 1. Objective

To validate the core functionalities of the SauceDemo e-commerce web application, ensuring that all critical user flows work as expected and defects are identified before release.

---

## 2. Scope

**In Scope:**
- User authentication (login & logout)
- Product catalog display and sorting
- Shopping cart management (add & remove items)
- Checkout process (form validation & order completion)

---

## 3. Test Strategy

Testing will be conducted using the following approach:

- **Manual Testing** — Scenario-based test cases covering functional and negative flows
- **Test Design Techniques** — Equivalence Partitioning, Boundary Value Analysis, Positive & Negative Testing, Basic User Flow Coverage
- **Defect Management** — Bugs will be logged with severity, priority, steps to reproduce, and expected vs actual results

---

## 4. Test Environment

| Parameter | Detail |
|---|---|
| Application URL | https://www.saucedemo.com |
| Browser | Google Chrome (latest) |
| OS | Windows 10 |
| Test Account | standard_user / secret_sauce |
| Execution Type | Manual |

---

## 5. Test Coverage

| Module | Test Cases | Technique |
|---|---|---|
| Login | 4 | Equivalence Partitioning, Negative Testing |
| Product Catalog | 3 | Functional, Boundary Value Analysis |
| Shopping Cart | 3 | Functional, Negative Testing |
| Checkout | 2 | Functional, Negative Testing |
| Logout | 1 | Basic User Flow |
| **Total** | **13** | |

---

## 6. Entry & Exit Criteria

**Entry Criteria** *(testing can begin when):*
- Application is accessible via browser
- Test credentials are valid and functional
- Test cases have been reviewed and finalized

**Exit Criteria** *(testing is complete when):*
- All 13 test cases have been executed
- All bugs have been logged with complete details
- No critical or high severity open bugs remain

---

## 7. Deliverables

| Deliverable | File |
|---|---|
| Test Plan | `test-plan.md` |
| Test Cases | `test-cases.md` |
| Bug Report | `bug-report.md` |

---

## 8. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| SauceDemo is a demo app — bugs may be intentional | Document findings regardless; treat as real-world scenario |
| Limited test data available | Use provided test accounts and publicly available data |
| No access to backend/database | Testing limited to UI and front-end behavior |

---
