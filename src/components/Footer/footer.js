import { Component } from "../component";
import { Day } from "../Day";
import { dateFormatter } from "../../utils";
import { departmentTeams } from "../../data";

export class Footer extends Component {
  constructor(parentSelector, tagName, className, currentDate) {
    super(parentSelector, tagName, className);
    this.departmentTeams = departmentTeams;

    this.currentDate = currentDate;
    this.daysInCurrentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    this.fixedDayCount = 31;
    this.showDays = [];
    this.hideDays = [];

    for (let index = 0; index < departmentTeams.teams.length - 1; index++) {
      this.FooterHead = new Component(this.component, "tr", "footer__head");
      this.FooterName = new Component(this.component, "td", "footer__name");
      this.FooterHead.component.insertAdjacentElement("afterbegin", this.FooterName.component);
      this.FooterName.component.textContent = "Day-Person-Starts";
    }
    this.FooterDescr = new Component(this.component, "div", "footer__descr");
    this.FooterBlock = new Component(this.component, "div", "footer__block");
    this.FooterBlockTitle = new Component(this.component, "span", "footer__block--title");
    this.FooterBlockIcon = new Component(this.component, "i", "icon icon-001-group");
    this.FooterBlockCountPercent = new Component(this.component, "span", "footer__block--countpercent");
  }

  setCurrentDate(date) {
    this.currentDate = date;
  }

  setDaysInMonth(year, month) {
    this.daysInCurrentMonth = new Date(year, month, 0).getDate();
  }

  render() {
    super.render();
    this.FooterHeadRender();
    this.FooterDescrRender();
    this.FooterBlockRender();
    this.renderDate();
    this.updateData(this.fixedDayCount, this.daysInCurrentMonth, this.hideDays, this.showDays);
    this.updateDayName(this.currentDate, this.showDays);
    this.rendersumVacation();
  }

  rendersumVacation() {
    const itemFooter = this.component.querySelector(".footer-day");
    const vacation = this.component.querySelectorAll(".vacation");
  }

  FooterHeadRender() {
    this.component.insertAdjacentElement("beforeend", this.FooterHead.component);
    this.FooterHead.component.insertAdjacentElement("afterbegin", this.FooterName.component);
    this.FooterName.component.textContent = "Day-Person-Starts";
  }

  FooterDescrRender() {
    this.FooterHead.component.insertAdjacentElement("afterend", this.FooterDescr.component);
    this.FooterDescr.component.textContent = "September teams Summary";
  }

  FooterBlockRender() {
    this.FooterDescr.component.insertAdjacentElement("afterend", this.FooterBlock.component);
    this.FooterBlock.component.insertAdjacentElement("afterbegin", this.FooterBlockTitle.component);
    this.FooterBlockTitle.component.textContent = "On vacation";
    this.FooterBlock.component.insertAdjacentElement("beforeend", this.FooterBlockIcon.component);
    this.FooterBlockIcon.component.textContent = "15";
    this.FooterBlock.component.insertAdjacentElement("beforeend", this.FooterBlockCountPercent.component);
    this.FooterBlockCountPercent.component.textContent = "12%";
  }

  renderDate() {
    for (let index = 1; index <= this.daysInCurrentMonth; index++) {
      const chosenDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), index);
      const [dayName] = dateFormatter.format(chosenDate).replace(",", "").split(" ");
      this.day = new Day(this.FooterHead.component, "td", "outputItem", dayName.slice(0, 2));
      this.day.addClass("footer-day");
      this.day.isWeekend();
      this.showDays.push(this.day);
      this.day.render();
      if (index === this.daysInCurrentMonth) {
        this.summary = new Day(this.FooterHead.component, "td", "outputItem footer-day");
        this.summary.component.classList.add("footer-day");
        this.summary.render();
      }
    }
  }

  updateFooterDays(currentDate) {
    this.setCurrentDate(currentDate);
    this.setDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
    this.updateData(this.fixedDayCount, this.daysInCurrentMonth, this.hideDays, this.showDays);
    this.updateDayName(this.currentDate, this.showDays);
  }
}
