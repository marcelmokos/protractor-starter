/**
 * @param element {ElementFinder}
 */
const scrollIntoView = element =>
    browser.executeScript((el) => {
      el.scrollIntoView();
    }, element.getWebElement());

export default scrollIntoView;
