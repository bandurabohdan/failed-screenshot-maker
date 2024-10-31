# failed-screenshot-maker

`failed-screenshot-maker` is a utility for Selenium WebDriver tests that automatically captures screenshots of failed tests and attaches them to an Allure report. It simplifies the process of visualizing test failures by saving screenshots to a local directory and embedding them directly into your Allure test reports.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Parameters](#parameters)

## Installation

You can install `failed-screenshot-maker` using npm:

```bash
npm install failed-screenshot-maker --save-dev
```
## Usage

Import the `failed-screenshot-maker` function into your test suite, and use it in an `afterEach` or `finally` block to capture screenshots of failed tests.

### Example with Mocha and Selenium WebDriver

```javascript
import failedScreenshotMaker from 'failed-screenshot-maker';
import { Builder } from 'selenium-webdriver';
import { describe, it, afterEach, after } from 'mocha';

describe('My Test Suite', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterEach(async function() {
    await failedScreenshotMaker(this.currentTest, driver);
  });

  after(async function() {
    await driver.quit();
  });

  it('should perform a test that may fail', async function() {
    await driver.get('http://example.com');
    // Add your test steps here
  });
});
```

## Parameters

The `failedScreenshotMaker` function accepts two parameters:

- **`test`**: An object representing the current test context, typically provided by the testing framework (e.g., Mocha).
  - **`test.state`**: `string` - The state of the test (`'failed'`, `'passed'`, etc.).
  - **`test.title`**: `string` - The title or name of the test.
- **`driver`**: The Selenium WebDriver instance used for browser automation.
  - **`driver.takeScreenshot()`**: `Function` - A method that captures a screenshot and returns it as a base64-encoded string.
    - Returns: `Promise<string>` - A promise that resolves with the base64-encoded screenshot.
