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

  for (let pageName in scenarios) {
    describe(`when '${pageName}' page link is clicked`, () => {
      const page = scenarios[pageName];
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
  }
});
