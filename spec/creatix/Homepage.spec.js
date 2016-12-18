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
  });
});
