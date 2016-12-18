import Page from "../../utils/Page";
import Common from "./Common";
import Homepage from "./Homepage";

export default class Blog extends Page {
  selector = $("#page-blog");

  get = () => {
    const homepage = new Homepage();
    homepage.get();
    this.pageLink.click();

    this.waitUntilDisplayed();
  };

  getCommon = () => new Common();
  pageLink = this.getCommon().getHeaderNavigation().link.blog;
}

