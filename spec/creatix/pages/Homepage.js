import Common from "./Common";
import Page from "../../utils/Page";

export default class Homepage extends Page {
  selector = $("#page-main");

  get = () => {
    /**
     * Browser window will maximize width and height
     */
    browser.manage().window().maximize();

    browser.baseUrl = "http://www.thinkcreatix.com/";
    browser.get("/");
    this.waitUntilDisplayed();
  };

  getCommon = () => new Common();
}
