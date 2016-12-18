import UIComponent from "../../utils/UIComponent";

export default class Common  {
  /**
   * @returns {HeaderNavigation}
   */
  getHeaderNavigation = () => new HeaderNavigation();

  /**
   * @returns {HeaderSubNavigation}
   */
  getHeaderSubNavigation = () => new HeaderSubNavigation();

  /**
   * @returns {Footer}
   */
  getFooter = () => new Footer();
}

class HeaderNavigation extends UIComponent {
  selector = $("#menu.menu");

  links = this.selector.$$("li > a:not(.home):not(.submenu-item)");

  link = {
    work: this.links.get(0),
    about: this.links.get(1),
    careers: this.links.get(2),
    blog: this.links.get(3),
    contact: this.links.get(4),
  }
}

class HeaderSubNavigation extends UIComponent {
  selector = $("#about-subnav");

  links = this.selector.$$("li > a");
}

class Footer extends UIComponent {
  selector = $("#footer");

  constactLinks = this.selector.$("div.left").$$("a");
  social = this.selector.$("ul.social");

  link = {
    email: this.constactLinks.first(),
    tel: this.constactLinks.get(1),
    facebook: this.social.$(".soc-fb"),
    linkedIn: this.social.$(".soc-ln"),
  };

  copyright = this.selector.$("#copyright")
}
