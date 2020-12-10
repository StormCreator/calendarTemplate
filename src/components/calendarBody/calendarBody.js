import { Component } from "../component";
import { Member } from "../member";
import { Day } from "../Day";
import { dateFormatter } from "../../utils";

export class CalendarBody extends Component {
  constructor(parentSelector, tagName, className, department, currentDate, id) {
    super(parentSelector, tagName, className);
    this.id = id;
    this.department = department;
    this.teamHead = new Component(this.component, "tr", "teamHead");
    this.teamHeadName = new Component(this.component, "td", "teamHead-name");
    this.teamHeadIcon = new Component(this.component, "i", "icon icon-001-group");
    this.teamHeadCount = new Component(this.component, "span", "teamhead-count");
    this.teamHeadArrow = new Component(this.component, "i", "icon icon-chevron-down-solid");
    this.currentDate = currentDate;
    this.arrMembers = [];
    this.daysInCurrentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
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
    this.parent.insertAdjacentElement("beforeend", this.component);
    this.renderHead();
    this.renderHeadName();
    this.renderMembersName();
    this.renderHeadIcon();
    this.renderHeadCount();
    this.renderHeadArrow();
    this.renderDays();
  }

  renderHead() {
    this.component.insertAdjacentElement("afterbegin", this.teamHead.component);
  }

  renderHeadName() {
    this.teamHead.component.insertAdjacentElement("afterbegin", this.teamHeadName.component);
    this.teamHeadName.component.textContent = this.department.name;
  }

  renderHeadIcon() {
    this.teamHeadName.component.insertAdjacentElement("beforeend", this.teamHeadIcon.component);
    // this.teamHeadIcon.insertTextInComponent(this.department.members.length);
  }

  renderHeadCount() {
    this.teamHeadName.component.insertAdjacentElement("beforeend", this.teamHeadCount.component);
    this.teamHeadCount.component.textContent = "8%";
  }

  renderHeadArrow() {
    this.teamHeadName.component.insertAdjacentElement("beforeend", this.teamHeadArrow.component);
    this.teamHeadArrow.component.addEventListener("click", this.hideMember.bind(this));
  }

  renderMembersName() {
    for (let index = 0; index < this.department.members.length; index++) {
      this.member = new Member(this.component, "tr", "member", this.department.members[index], this.currentDate);
      this.member.render();
      this.arrMembers.push(this.member);
    }
  }

  hideMember(event) {
    for (let index = 0; index < this.arrMembers.length; index++) {
      this.arrMembers[index].toggleComponent();
    }
    if (event.target.classList.contains("rotate-block")) {
      event.target.classList.remove("rotate-block");
    } else {
      event.target.classList.add("rotate-block");
    }
  }

  renderDays() {
    for (let index = 1; index <= this.daysInCurrentMonth; index++) {
      const chosenDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), index);
      const [dayName] = dateFormatter.format(chosenDate).replace(",", "").split(" ");
      const day = new Day(this.teamHead.component, "td", "outputItem member-day", dayName.slice(0, 2));
      day.isWeekend();
      this.showDays.push(day);
      day.render();
      if (index === this.daysInCurrentMonth) {
        new Day(this.teamHead.component, "td", "outputItem member-day headerDay", " ").render();
      }
    }
  }

  updateDaysMembers(currentDate) {
    for (let index = 0; index < this.arrMembers.length; index++) {
      this.arrMembers[index].currentDate = currentDate;
      this.arrMembers[index].updateDays(currentDate);
    }
  }

  updateDays(currentDate) {
    this.setCurrentDate(currentDate);
    this.setDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
    this.updateData(this.fixedDayCount, this.daysInCurrentMonth, this.hideDays, this.showDays);
    this.updateDayName(this.currentDate, this.showDays);
  }
}
