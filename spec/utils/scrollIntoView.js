/**
 * @param element {ElementFinder}
 */
export const scrollIntoView = element =>
    browser.executeScript((el) => {
      el.scrollIntoView();
    }, element.getWebElement());
