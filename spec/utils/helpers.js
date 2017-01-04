import {scrollIntoView} from "./scrollIntoView";

/**
 * @param element {ElementFinder}
 */
export const getElementId = async element => await (element.getAttribute("id"));

/**
 * @param inputElement {ElementFinder}
 * @returns {Promise.<ElementFinder>}
 */
export const getInputLabelElement = async (inputElement) => {
  const inputId = await getElementId(inputElement);

  return $(`[for='${inputId}']`);
};

/**
 * @param inputElement {ElementFinder}
 */
export const clickOnInputLabel = async (inputElement) => {
  const label = await getInputLabelElement(inputElement);

  scrollIntoView(label);
  label.click();
};
