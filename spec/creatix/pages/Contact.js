import Page from "../../utils/Page";
import Common from "./Common";
import Homepage from "./Homepage";

export default class Contact extends Page {
  selector = $("#page-contact");

  get = () => {
    const homepage = new Homepage();
    homepage.get();
    this.pageLink.click();

    this.waitUntilDisplayed();
  };

  getCommon = () => new Common();
  pageLink = this.getCommon().getHeader().getNavigation().link.contact;
}
