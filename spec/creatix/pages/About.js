import Page from "../../utils/Page";
import Common from "./Common";
import Homepage from "./Homepage";

export default class About extends Page {
  selector = $("#page-about");

  get = () => {
    const homepage = new Homepage();
    homepage.get();
    this.pageLink.click();

    this.waitUntilDisplayed();
  };

  getCommon = () => new Common();
  pageLink = this.getCommon().getHeader().getNavigation().link.about;
}

