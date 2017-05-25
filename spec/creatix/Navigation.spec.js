import About from "./pages/About";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

const about = new About();
const blog = new Blog();
const careers = new Careers();
const contact = new Contact();
const work = new Work();

describe("Feature: navigation", () => {
  const scenarios = {
    about,
    blog,
    careers,
    contact,
    work,
  };

  Object.entries(scenarios).forEach(([pageName, page]) => {
    describe(`when '${pageName}' page link is clicked`, () => {
      beforeAll(() => {
        page.get();
      });

      it(`then page '${page.selector.locator()}' should be displayed`, () => {
        expect(page.isDisplayed()).toBe(true);
      });

      it("then page link should have selected class", () => {
        expect(page.pageLink.getAttribute("class")).toContain("sel");
      });
    });
  });

  describe("responsive menu", () => {
    const menuToggle = contact.getCommon().getHeader().menuToggle;

    beforeAll(() => {
      contact.get();
    });

    describe("when browser window maximized", () => {
      it("then menu hamburger should not be visible", () => {
        expect(menuToggle.isDisplayed()).toBe(false);
      });
    });

    describe("when browser window tablet size", () => {
      beforeAll(() => {
        browser.manage().window().setSize(768, 1024);
      });

      it("then menu hamburger should be visible", () => {
        expect(menuToggle.isDisplayed()).toBe(true);
      });
    });

    describe("when browser window iPhone5 size", () => {
      beforeAll(() => {
        browser.manage().window().setSize(320, 568);
      });

      it("then menu hamburger should be visible", () => {
        expect(menuToggle.isDisplayed()).toBe(true);
      });
    });
  });
});
