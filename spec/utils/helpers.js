import scrollIntoView from "./scrollIntoView";

/**
 * @param inputElementWithLabel {ElementFinder}
 * @returns {Promise.<ElementFinder>}
 */
export const getInputsLabelElement = async (inputElementWithLabel) => {
  const inputId = await inputElementWithLabel.getAttribute("id");

  return $(`[for='${inputId}']`);
};

/**
 * @param element {ElementFinder}
 * @returns {Promise.<ElementFinder>}
 */
export const scrollAndClick = async (element) => {
  scrollIntoView(element);
  await element.click();

  return element;
};

