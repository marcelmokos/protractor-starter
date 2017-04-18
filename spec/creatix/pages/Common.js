import UIComponent from "../../utils/UIComponent";

export default class Common {
  /**
   * @returns {Header}
   */
  getHeader = () => new Header();

  /**
   * @returns {Footer}
   */
  getFooter = () => new Footer();
}

class Header extends UIComponent {
  selector = $("#header");

  menuToggle = this.selector.$("#menu-toggle");

  /**
   * @returns {Navigation}
   */
  getNavigation = () => new Navigation();

  /**
   * @returns {SubNavigation}
   */
  getSubNavigation = () => new SubNavigation();
}

/**
 * Header Navigation
 */
class Navigation extends UIComponent {
  selector = $("#menu.menu");

  links = this.selector.$$("li > a:not(.home):not(.submenu-item)");

  link = {
    work: this.links.get(0),
    about: this.links.get(1),
    careers: this.links.get(2),
    blog: this.links.get(3),
    contact: this.links.get(4),
  };
}

/**
 * Header Sub Navigation
 */
class SubNavigation extends UIComponent {
  selector = $("#about-subnav");

  links = this.selector.$$("li > a"); // eslint-disable-line protractor/no-repetitive-selectors
}

class Footer extends UIComponent {
  selector = $("#footer");

  social = this.selector.$$("ul.social");
  chicago = this.social.get(0).$$("a");
  bratislava = this.social.get(1).$$("a");

  link = {
    email: this.selector.$("[href='mailto:hello@thinkcreatix.com']"),
    chicago: {
      facebook: this.chicago.get(0),
      linkedIn: this.chicago.get(1),
      map: this.chicago.get(2),
    },
    bratislava: {
      facebook: this.bratislava.get(0),
      linkedIn: this.bratislava.get(1),
      map: this.bratislava.get(2),
    },
  };

  copyright = this.selector.$("#copyright");
}
