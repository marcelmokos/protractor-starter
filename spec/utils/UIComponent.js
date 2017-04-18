/**
 * Base ui component class that other components should inherit from.
 */
export default class UIComponent {
  /**
   * This class property enables use of specific functions 'isDisplayed' and 'waitUntilDisplayed'
   * @type {ElementFinder}
   */
  selector = undefined;

  checkSelectorExist = () => {
    if (this.selector === undefined) {
      throw new TypeError(
        `Class '${this.constructor.name}' ` +
          "extends 'UIComponent' possibly 'Page' Object Class and have to implement abstract property 'selector' " +
          "when 'isDisplayed' or 'waitUntilDisplayed' are used",
      );
    }
  };

  /**
   * @returns Function which resolves to boolean
   */
  isDisplayed = () => {
    this.checkSelectorExist();

    return ExpectedConditions.visibilityOf(this.selector)();
  };

  waitUntilDisplayedTimeout = 5000;

  /**
   * Wait until this page is displayed.
   */
  waitUntilDisplayed = () => {
    this.checkSelectorExist();

    browser.wait(
      () => this.isDisplayed(),
      this.waitUntilDisplayedTimeout,
      `Failed while waiting for "${this.selector.locator()}" of Page Object Class '${this.constructor.name}' to display.`,
    );
  };
}
