import Common from "./Common";
import Homepage from "./Homepage";
import Page from "../../utils/Page";

export default class Work extends Page {
  selector = $("#page-work");

  get = () => {
    const homepage = new Homepage();
    homepage.get();
    this.pageLink.click();

    this.waitUntilDisplayed();
  };

  getCommon = () => new Common();
  pageLink = this.getCommon().getHeader().getNavigation().link.work;
}
