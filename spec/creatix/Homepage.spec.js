import Homepage from "./pages/Homepage";

const homepage = new Homepage();

describe("homepage", () => {

  describe("when on homepage", () => {

    beforeAll(() => {
      homepage.get();
    });

    it("then page should be displayed", () => {
      expect(homepage.isDisplayed()).toBe(true);
    });

    describe("navigation", () => {
      const navigation = homepage.getHeaderNavigation();

      it("should have 5 links", () => {
        expect(navigation.items.count()).toBe(5);
      });
    });

    describe("sub navigation", () => {
      const subNavigation = homepage.getHeaderSubNavigation();

      it("should have 5 links", () => {
        expect(subNavigation.items.count()).toBe(5);
      });
    });


  });
});
