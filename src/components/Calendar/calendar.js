import { dateFormatter } from "../../utils";
import { Component } from "..";

export class Calendar extends Component {
  constructor(parentSelector) {
    super(parentSelector);
    this.currentDate = new Date();
    this.label = new Component(this.component, "p");
  }

  render() {
    super.render();
    this.createCurrentLabel();
  }

  createCurrentLabel() {
    this.component.prepend(this.label.component);
    this.updateCurrentLabel(this.currentDate);
  }

  updateCurrentLabel(date) {
    const { component: label } = this.label;
    label.textContent = dateFormatter
      .format(new Date(date))
      .replace(",", "")
      .split(" ")[1];
  }
}
