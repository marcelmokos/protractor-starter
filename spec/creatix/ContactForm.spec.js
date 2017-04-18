import { getInputsLabelElement, scrollAndClick } from "./../utils/helpers";

import Contact from "./pages/Contact";

const contact = new Contact();
const contactForm = contact.getContactForm();

describe("Feature: Contact Form", () => {
  describe("when on contact page", () => {
    beforeAll(() => {
      contact.get();
    });

    it("then page should be displayed", () => {
      expect(contact.isDisplayed()).toBe(true);
    });

    it("then contact form should be displayed", () => {
      expect(contactForm.isDisplayed()).toBe(true);
    });

    describe("inputs", () => {
      describe("name", () => {
        it("should be able to change text value", () => {
          const input = contactForm.input.name;
          const text = "Test Name";
          input.sendKeys(text);
          expect(input.getAttribute("value")).toBe(text);
        });
      });

      describe("phone", () => {
        it("should be able to change text value", () => {
          const input = contactForm.input.phone;
          const text = "00 421 900 000 000";
          input.sendKeys(text);
          expect(input.getAttribute("value")).toBe(text);
        });
      });

      describe("type of project", () => {
        const typeInputs = contactForm.input.typeOfProject;

        describe("when page loads ", () => {
          it("then all project types should not be selected", () => {
            Object.values(typeInputs).forEach((typeInput) => {
              expect(typeInput.isSelected()).toBe(false);
            });
          });
        });

        describe("when all types selected", () => {
          beforeAll(async () => {
            Object.values(typeInputs).forEach(async (typeInput) => {
              const label = await getInputsLabelElement(typeInput);
              await scrollAndClick(label);
            });
          });

          it("then all project types should be selected", () => {
            Object.values(typeInputs).forEach((typeInput) => {
              expect(typeInput.isSelected()).toBe(true);
            });
          });

          describe("Async test example", () => {
            const input1 = typeInputs.website;
            const input2 = typeInputs.webApp;

            // when expect() is in Promise.then() method body
            // we have to use callback function done()
            it("test two inputs to have labels with same classes using Promise.then() ", (done) => {
              getInputsLabelElement(input1).then((label1) => {
                getInputsLabelElement(input2).then((label2) => {
                  label1.getAttribute("class").then((label1Classes) => {
                    label2.getAttribute("class").then((label2Classes) => {
                      expect(label1Classes).toBe(label2Classes);
                      done();
                    });
                  });
                });
              });
            });

            // once you use async await we do not have to use callback function
            // and we have more controle over test
            it("test two inputs to have labels with same classes using async await", async () => {
              const label1 = await getInputsLabelElement(input1);
              const label2 = await getInputsLabelElement(input1);

              expect(await label1.getAttribute("class")).toBe(
                await label2.getAttribute("class"),
              );
            });
          });
        });
      });
    });
  });
});
