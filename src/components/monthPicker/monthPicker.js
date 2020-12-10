import { dateFormatter } from "../../utils";
import { Component } from "../component";

export class MonthPicker extends Component {
  constructor(parentSelector, tagName, className, calendarHead, arrayBody) {
    super(parentSelector, tagName, className);
    this.currentDate = new Date();
    this.calendarHead = calendarHead;
    this.arrBody = arrayBody;
    this.label = new Component(this.component, "h1", "month");
    this.arrowPrev = new Component(
      this.component,
      "i",
      "arrowPrev icon icon-Arrow-2",
    );
    this.arrowNext = new Component(
      this.component,
      "i",
      "arrowNext icon icon-Arrow-3",
    );
  }

  render() {
    super.render();
    this.createCurrentLabel();
    this.renderArrow();
  }

  createCurrentLabel() {
    this.component.prepend(this.label.component);
    this.updateCurrentLabel(this.currentDate);
  }

  updateCurrentLabel(date) {
    const { component: label } = this.label;
    const currentMonth = dateFormatter.format(new Date(date)).replace(",", "").split(" ")[1];
    label.textContent = `${currentMonth} ${this.currentDate.getFullYear()}`;
  }

  renderArrow() {
    this.component.insertAdjacentElement("afterbegin", this.arrowPrev.component);
    this.component.insertAdjacentElement("beforeend", this.arrowNext.component);

    this.arrowNext.component.addEventListener("click", () => {
      this.changeMonth(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1));
    });

    this.arrowPrev.component.addEventListener("click", () => {
      this.changeMonth(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1));
    });
  }

  changeMonth(date) {
    this.currentDate = date
    this.updateCurrentLabel(this.currentDate);
    this.calendarHead.updateDays(this.currentDate);
    for (let index = 0; index < this.arrBody.length; index++) {
      this.arrBody[index].updateDays(this.currentDate);
      this.arrBody[index].updateDaysMembers(this.currentDate);
    }
  }
}
