import Homepage from "./pages/Homepage";

const page = new Homepage();

const testLink = (
  link = {
    element: undefined,
    href: "",
    text: "",
  },
) => {
  describe(`link "${link.text}"`, () => {
    it(`should contain href '${link.href}'`, () => {
      expect(link.element.getAttribute("href")).toContain(link.href);
    });

    it(`should have text '${link.text}'`, () => {
      expect(link.element.getText()).toBe(link.text);
    });
  });
};

describe("Common", () => {
  beforeAll(() => {
    page.get();
  });

  describe("navigation", () => {
    const navigation = page.getCommon().getHeader().getNavigation();

    it("should have 5 links", () => {
      expect(navigation.links.count()).toBe(5);
    });

    testLink({
      element: navigation.links.get(0),
      href: "/work",
      text: "Work",
    });

    testLink({
      element: navigation.links.get(1),
      href: "/about",
      text: "About",
    });

    testLink({
      element: navigation.links.get(2),
      href: "/careers",
      text: "Careers",
    });

    testLink({
      element: navigation.links.get(3),
      href: "/blog",
      text: "Blog",
    });

    testLink({
      element: navigation.links.get(4),
      href: "/contact",
      text: "Get in Touch",
    });
  });

  describe("sub navigation", () => {
    const subNavigation = page.getCommon().getHeader().getSubNavigation();

    it("should have 5 links", () => {
      expect(subNavigation.links.count()).toBe(5);
    });
  });

  describe("footer", () => {
    const footer = page.getCommon().getFooter();

    testLink({
      element: footer.link.email,
      href: "mailto:hello@thinkcreatix.com",
      text: "hello@thinkcreatix.com",
    });

    testLink({
      element: footer.link.chicago.facebook,
      href: "https://www.facebook.com/CreatixInc",
      text: "",
    });

    testLink({
      element: footer.link.chicago.linkedIn,
      href: "https://www.linkedin.com/company/creatix-inc-",
      text: "",
    });

    testLink({
      element: footer.link.bratislava.facebook,
      href: "https://www.facebook.com/creatixslovakia",
      text: "",
    });

    testLink({
      element: footer.link.bratislava.linkedIn,
      href: "https://www.linkedin.com/company/creatix-slovakia",
      text: "",
    });

    describe("copyright", () => {
      it("should contain 'Creatix Inc.'", () => {
        expect(footer.copyright.getText()).toContain("Creatix Inc.");
      });

      it("should contain 'All Right Reserved'", () => {
        expect(footer.copyright.getText()).toContain("All Rights Reserved");
      });
    });
  });
});
