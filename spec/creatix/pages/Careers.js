import Common from "./Common";
import Homepage from "./Homepage";
import Page from "../../utils/Page";

export default class Careers extends Page {
  selector = $("#page-careers");

  get = () => {
    const homepage = new Homepage();
    homepage.get();
    this.pageLink.click();

    this.waitUntilDisplayed();
  };

  getCommon = () => new Common();
  pageLink = this.getCommon()
    .getHeader()
    .getNavigation().link.careers;
}
