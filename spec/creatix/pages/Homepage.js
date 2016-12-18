import {Page} from "./../../utils/Page";
import {UIComponent} from "./../../utils/UIComponent";

export default class Homepage extends Page {
  get = () => {
    browser.get("http://www.thinkcreatix.com/");
    this.waitUntilDisplayed();
  };

  selector = $("#page-main");

  /**
   * @returns {HeaderNavigation}
   */
  getHeaderNavigation = () => new HeaderNavigation();
  getHeaderSubNavigation = () => new HeaderSubNavigation();
}

class HeaderNavigation extends UIComponent {
  selector = $("#menu.menu");

  items = this.selector.$$("li > a:not(.home):not(.submenu-item)");
}

class HeaderSubNavigation extends UIComponent {
  selector = $("#about-subnav");

  items = this.selector.$$("li > a");
}

