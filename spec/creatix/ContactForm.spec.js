import Contact from "./pages/Contact";
import {clickOnInputLabel} from "./../utils/helpers";

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
        const types = contactForm.input.typeOfProject;

        describe("when page loads ", () => {
          it("then all project types should not be selected", () => {
            Object.values(types).forEach((type) => {
              expect(type.isSelected()).toBe(false);
            });
          });
        });

        describe("when all types selected", () => {
          beforeAll(() => {
            Object.values(types).forEach((type) => {
              clickOnInputLabel(type);
            });
          });

          it("then all project types should be selected", () => {
            Object.values(types).forEach((type) => {
              expect(type.isSelected()).toBe(true);
            });
          });
        });
      });
    });
  });
});
