import { Component } from "../component";

export class Day extends Component {
  constructor(parentSelector, tagName, className, dayName = " ", dayNumber = " ", color) {
    super(parentSelector, tagName, className);
    this.dayName = dayName;
    this.dayNumber = dayNumber;
    this.weekend = false;
    this.vacation = false;
    this.color = color;
    this.labelName = new Component(this.component, "span", "outputDay");
    this.labelNumber = new Component(this.component, "span", "outputDate");
  }

  render() {
    super.render();
    this.createCurrentLabel();
    this.checkHeadClass();
    this.isVacation();
  }

  createCurrentLabel() {
    this.component.append(this.labelName.component);
    this.component.append(this.labelNumber.component);
  }

  setLabelName(dayName) {
    if (this.component.classList.contains("weekend")) {
      this.component.classList.remove("weekend");
    }
    if (this.component.classList.contains("headerDay")) {
      this.labelName.component.textContent = dayName;
    }

    this.dayName = dayName;

    this.isWeekend();
    this.isVacation();
  }

  setLabelNumber(dayNumber) {
    this.labelNumber.component.append(dayNumber);
  }

  hideComponent() {
    this.component.classList.add("close-item");
  }

  showComponent() {
    this.component.classList.remove("close-item");
  }

  isWeekend() {
    if (this.dayName === "Sa" || this.dayName === "Su") {
      this.component.classList.add("weekend");
      this.weekend = true;
    }
  }

  isVacation() {
    if (this.vacation) {
      this.component.classList.add(`vacation`);
      this.component.classList.add(`${this.color}`);
      this.vacation = true;
    } else {
      this.component.classList.remove(`vacation`);
      this.component.classList.remove(`${this.color}`);
    }
  }

  checkHeadClass() {
    if (this.component.classList.contains("headerDay")) {
      this.setLabelName(this.dayName);
      this.setLabelNumber(this.dayNumber);
    }
  }
}
