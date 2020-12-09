import { Component } from "../component";
import { CalendarBody } from "../calendarBody";
import { departmentTeams } from "../../data";

export class Footer extends Component {
    constructor(parentSelector, tagName, className) {
        super(parentSelector, tagName, className);
        this.departmentTeams = departmentTeams;
        for (let i = 0; i < departmentTeams.teams.length - 1; i++) {
            this.FooterHead = new Component(this.component, "tr", "footer__head");
            this.FooterName = new Component(this.component, "td", "footer__name");
            this.FooterHead.component.insertAdjacentElement("afterbegin", this.FooterName.component);
            this.FooterName.component.textContent = "Day-Person-Starts";
        }
        this.FooterDescr = new Component(this.component, "div", "footer__descr");
        this.FooterBlock = new Component(this.component, "div", "footer__block");
        this.FooterBlockTitle = new Component(this.component, "span", "footer__block--title");
        this.FooterBlockIcon = new Component(this.component, "i", "icon icon-001-group");
        this.FooterBlockCount = new Component(this.component, "span", "footer__block--count");
        this.FooterBlockCountPercent = new Component(this.component, "span", "footer__block--countpercent");


    }

    render() {
        super.render();
        this.FooterHeadRender();
        this.FooterDescrRender();
        this.FooterBlockRender();
        this.renderDays();

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
        this.FooterBlock.component.insertAdjacentElement("beforeend", this.FooterBlockCount.component);
        this.FooterBlockCount.component.textContent = "15";
        this.FooterBlock.component.insertAdjacentElement("beforeend", this.FooterBlockCountPercent.component);
        this.FooterBlockCountPercent.component.textContent = "12%";
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

            const day = new Day(
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

    updateDays(currentDate) {
        this.setCurrentDate(currentDate);
        this.setDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
        this.updateData(
            this.fixedDayCount,
            this.daysInCurrentMonth,
            this.hideDays,
            this.showDays,
        );
        this.updateDayName(this.currentDate, this.showDays);
    }
}