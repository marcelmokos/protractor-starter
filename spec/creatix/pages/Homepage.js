import Page from "../../utils/Page";
import Common from "./Common";

export default class Homepage extends Page {
  selector = $("#page-main");

  get = () => {
    /**
     * Browser window will maximize width and height
     */
    browser
      .manage()
      .window()
      .maximize();

    browser.get("http://www.thinkcreatix.com/");
    this.waitUntilDisplayed();
  };

  getCommon = () => new Common();
}
