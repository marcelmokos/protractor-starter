import Common from "./Common";
import ContactForm from "./ContactForm";
import Homepage from "./Homepage";
import Page from "../../utils/Page";

export default class Contact extends Page {
  selector = $("#page-contact");

  get = () => {
    const homepage = new Homepage();
    homepage.get();
    this.pageLink.click();

    this.waitUntilDisplayed();
  };

  getCommon = () => new Common();
  getContactForm = () => new ContactForm();
  pageLink = this.getCommon()
    .getHeader()
    .getNavigation().link.contact;
}
