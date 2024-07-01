import { template } from "../scripts/index";
export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this.template = this.getTemplate();
  }
  getTemplate() {
    return template.cloneNode(true).content.querySelector(".element");
  }
}
