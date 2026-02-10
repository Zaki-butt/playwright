##  Project Structure - Where Everything Goes
```
my-playwright-project/
├── tests/
│   ├── auth/
│   │   ├── login.spec.js          # ← Test cases for login
│   │   └── register.spec.js       # ← Test cases for registration
│   ├── pages/
│   │   ├── login.page.js          # ← Page elements & methods
│   │   └── register.page.js
│   └── fixtures/
│       └── test-data.js           # ← Test data (non-sensitive)
├── .env                            # ← Credentials (sensitive data)
├── .gitignore
├── playwright.config.js            # ← Playwright configuration
└── package.json