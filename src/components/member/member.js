import { Component } from "../component";
import { Day } from "../Day";
import { dateFormatter } from "../../utils";

export class Member extends Component {
  constructor(parentSelector, tagName, className, member, currentDate) {
    super(parentSelector, tagName, className);
    this.member = member;
    this.name = member.name;
    this.memberName = new Component(this.component, "td", "memberName");
    this.currentDate = currentDate;
    this.daysInCurrentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    // this.sumName = new Component(this.component, "td", "sumName");
    this.fixedDayCount = 31;
    this.showDays = [];
    this.hideDays = [];
  }

  render() {
    super.render();
    this.memberName.component.textContent = this.name;
    this.renderMemberName();
    this.renderDate();
    // this.updateDays(this.currentDate)
    // this.renderDays()
  }

  renderMemberName() {
    this.component.insertAdjacentElement("afterbegin", this.memberName.component);
    this.memberName.addClass("teamHead-name");
  }

  setCurrentDate(date) {
    this.currentDate = date;
  }

  setDaysInMonth(year, month) {
    this.daysInCurrentMonth = new Date(year, month, 0).getDate();
  }

  updateDayName() {
    for (let index = 0; index < this.showDays.length; index++) {
      const chosenDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), index + 1);
      const [dayName] = dateFormatter.format(chosenDate).replace(",", "").split(" ");
      this.showDays[index].setLabelName(dayName.slice(0, 2));
    }
  }

  updateDays(currentDate) {
    this.setCurrentDate(currentDate);
    this.setDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
    if (this.fixedDayCount % this.daysInCurrentMonth > this.hideDays.length) {
      const days = (this.fixedDayCount % this.daysInCurrentMonth) - this.hideDays.length;
      for (let index = 0; index < days; index++) {
        this.showDays[this.showDays.length - 1].hideComponent();
        this.hideDays.unshift(this.showDays[this.showDays.length - 1]);
        this.showDays.pop();
      }
      this.updateDayName();
    } else {
      const days = this.hideDays.length - (this.fixedDayCount % this.daysInCurrentMonth);
      for (let index = 0; index < days; index++) {
        this.showDays.push(this.hideDays[0]);
        this.showDays[this.showDays.length - 1].showComponent();
        this.hideDays.shift();
      }
      this.updateDayName();
    }
  }

  renderDate() {
    for (let index = 1; index <= this.daysInCurrentMonth; index++) {
      const chosenDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), index);
      const [dayName] = dateFormatter.format(chosenDate).replace(",", "").split(" ");
      const day = new Day(this.component, "td", "outputItem", dayName.slice(0, 2));
      day.addClass("member-day");
      day.isWeekend();
      this.showDays.push(day);
      day.render();
      if (index === this.daysInCurrentMonth) {
        const summary = new Day(this.component, "td", "outputItem headerDay", "Sum");
        summary.component.classList.add("member-day");
        summary.render();
      }
    }
  }
}
