import { Component } from "../component";
import { Day } from "../Day";
import { dateFormatter } from "../../utils";

export class CalendarHead extends Component {
  constructor(parentSelector, tagName, className, currentDate) {
    super(parentSelector, tagName, className);
    this.currentDate = currentDate;
    this.daysInCurrentMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0,
    ).getDate();
    this.fixedDayCount = 31;
    this.showDays = [];
    this.hideDays = [];
  }

  setCurrentDate(date) {
    this.currentDate = date;
  }

  setDaysInMonth(year, month) {
    this.daysInCurrentMonth = new Date(year, month, 0).getDate();
  }

  render() {
    // super.render();
    this.parent.insertAdjacentElement("afterbegin", this.component);
    this.renderDays();
  }

  renderDays() {
    for (let index = 1; index <= this.daysInCurrentMonth; index++) {
      const chosenDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        index,
      );
      const [dayName] = dateFormatter
        .format(chosenDate)
        .replace(",", "")
        .split(" ");
      let day = new Day(
        this.component,
        "td",
        "outputItem headerDay",
        dayName.slice(0, 2),
        index,
      );
      day.isWeekend();
      this.showDays.push(day);
      day.render();
      if (index === this.daysInCurrentMonth) {
        new Day(this.component, "td", "outputItem headerDay", "Sum").render();
      }
    }
  }

  updateDayName() {
    for (let index = 0; index < this.showDays.length; index++) {
      const chosenDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        index + 1,
      );
      const [dayName] = dateFormatter
        .format(chosenDate)
        .replace(",", "")
        .split(" ");
      this.showDays[index].setLabelName(dayName.slice(0, 2));
    }
  }

  updateDays(currentDate) {
    this.setCurrentDate(currentDate);
    this.setDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
    if (this.fixedDayCount % this.daysInCurrentMonth > this.hideDays.length) {
      let days =
        (this.fixedDayCount % this.daysInCurrentMonth) - this.hideDays.length;
      for (let index = 0; index < days; index++) {
        this.showDays[this.showDays.length - 1].hideComponent();
        this.hideDays.unshift(this.showDays[this.showDays.length - 1]);
        this.showDays.pop();
      }
      this.updateDayName();
    } else {
      let days =
        this.hideDays.length - (this.fixedDayCount % this.daysInCurrentMonth);
      for (let index = 0; index < days; index++) {
        this.showDays.push(this.hideDays[0]);
        this.showDays[this.showDays.length - 1].showComponent();
        this.hideDays.shift();
      }
      this.updateDayName();
    }
  }
}
