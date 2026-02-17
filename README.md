# Playwright Automation Framework

This project is an enterprise-level Playwright automation framework designed for scalability and maintainability.

## Project Structure

```
playwright-automation/
├── config/             # Environment configurations (dev.env, qa.env)
├── fixtures/           # Playwright fixtures
├── pages/              # Page Object Models
├── tests/
│   ├── api/            # API tests
│   └── e2e/            # End-to-End UI tests
├── utils/              # Helper utilities
├── .eslintrc.js        # Linting configuration
├── .prettierrc         # Formatting configuration
├── jsconfig.json       # Path aliases
└── playwright.config.js # Main configuration
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run only E2E tests
```bash
npx playwright test --project=chromium --project=firefox --project=webkit
```

### Run only API tests
```bash
npx playwright test --project=api
```

### Run in different environments
By default, tests run against `dev` environment. To switch:
```bash
ENV=qa npx playwright test
```

## Code Quality

- **Linting**: `npm run lint`
- **Formatting**: `npm run format`
