# Playwright End-to-End Automation Framework

## Overview
This repository contains an end-to-end UI automation framework built using Playwright with TypeScript.  
The goal of this project is to automate real user workflows of a web application and demonstrate practical QA automation skills using industry-standard tools and best practices.

The framework covers core application flows such as login, product selection, cart validation, and checkout, and is designed to be clean, maintainable, and scalable.

---

## Tech Stack
- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI)

---

## Project Structure
The framework follows the Page Object Model (POM) to keep test logic and UI interactions separate.

pages/
├── LoginPage.ts
├── ProductPage.ts
├── CartPage.ts
└── CheckoutPage.ts

tests/
├── login/
│ └── login.spec.ts
├── product/
│ └── product.spec.ts
└── e2e/
└── checkout.spec.ts

.github/workflows/
└── playwright.yml


---

## Automated Test Coverage

### Login
- Valid user login
- Invalid user login with error message validation

### Product
- Add product to cart
- Cart badge count validation

### Cart & Checkout (End-to-End)
- Verify product in cart
- Complete checkout flow
- Validate order success message

---

## How to Run the Tests

### Install dependencies

npm install

### Run all tests

npx playwright test

### Run tests in headed mode

npx playwright test --headed

---

## Test Report
Playwright generates an HTML report after every execution.

To view the report:

npx playwright show-report

---

## CI Integration
This project includes GitHub Actions configuration to automatically run tests on every push to the repository.

---

## Author
Navneet Chinchole  
QA Automation | Playwright | TypeScript
