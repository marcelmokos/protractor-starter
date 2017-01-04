import UIComponent from "../../utils/UIComponent";

export default class ContactForm extends UIComponent {
  selector = $("#contactForm");

  input = {
    name: this.selector.$("input[name='name']"),
    email: this.selector.$("input[name='email']"),
    phone: this.selector.$("input[name='phone']"),
    typeOfProject: {
      website: this.selector.$("#website"),
      mobileApp: this.selector.$("#mobileApp"),
      webApp: this.selector.$("#webApp"),
      devices: this.selector.$("#devices"),
      other: this.selector.$("#other"),
    },
    timing: this.selector.$("input[name='timing']"),
    comment: this.selector.$("input[name='comment']"),
  };

  submitButton = this.selector.$("button[type='submit']");
}
