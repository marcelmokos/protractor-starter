/**
 * Base ui component class that other components should inherit from.
 */
export  class UIComponent {
  selector = undefined;

  checkSelectorExist = () => {
    if (this.selector === undefined) {
      throw new TypeError("You have to set selector property");
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
    browser.wait(() => this.isDisplayed(), this.waitUntilDisplayedTimeout, `Failed while waiting for "${this.selector.locator()}" to display.`);
  };
}


