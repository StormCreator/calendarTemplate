import { Component } from "../component";

export class Day extends Component {
  constructor(
    parentSelector,
    tagName,
    className,
    dayName = " ",
    dayNumber = " ",
  ) {
    super(parentSelector, tagName, className);
    // this.vacationMember = vacationMember;
    this.vacation = false;
    this.dayName = dayName;
    this.dayNumber = dayNumber;
    this.labelName = new Component(this.component, "span", "outputDay");
    this.labelNumber = new Component(this.component, "span", "outputDate");
  }

  render() {
    super.render();
    this.createCurrentLabel();
    this.checkHeadClass();
    this.isVacation();
    // this.setLabelName(this.dayName);
    // this.setLabelNumber(this.dayNumber);
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
    }
  }

  isVacation() {
    if (this.vacation) {
      this.component.classList.add("vacation");
    } else {
      this.component.classList.remove("vacation");
    }
  }

  checkHeadClass() {
    if (this.component.classList.contains("headerDay")) {
      this.setLabelName(this.dayName);
      this.setLabelNumber(this.dayNumber);
    }
  }
}
