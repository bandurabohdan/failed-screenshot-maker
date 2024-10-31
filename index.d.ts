import { Test } from "mocha";
import { WebDriver } from "selenium-webdriver";

declare module 'failed-screenshot-maker' {

  /**
   * Captures a screenshot if the test has failed and attaches it to the Allure report.
   *
   * @param {Object} test - The currentTest object from mocha framework includes state and title.
   * @param {Object} driver - The Selenium WebDriver instance used to interact with the browser.
   *
   * @returns {Promise<void>} - A promise that resolves when the screenshot is captured and attached, or immediately if the test did not fail.
  */

  const failedScreenshotMaker: (test: Test, driver: WebDriver) => Promise<void>;

  export default failedScreenshotMaker;
}
