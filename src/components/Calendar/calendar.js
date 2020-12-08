import { MonthPicker } from "../monthPicker";
import { Component } from "../component";
import { CalendarHead } from "../calendarHead";
import { CalendarBody } from "../calendarBody";
import { departmentTeams } from "../../data";
import { dateFormatter } from "../../utils/";


export class Calendar {
    constructor(departmentTeams) {
        this.currentDate = new Date();
        // this.table = new Table("#app","table","table", this.currentDate);
        this.table = new Component("#app", "table", "table");
        this.calendarHead = new CalendarHead(this.table.component, 'thead', 'calendar-head', this.currentDate);
        this.arrBody = [];
        for (let i = 0; i < departmentTeams.teams.length; i++) {
            this.calendarBody = new CalendarBody(this.table.component, "tbody", "body", departmentTeams.teams[i], this.currentDate, `id-${i}`);
            this.calendarBody.render();
            this.arrBody.push(this.calendarBody)
        }
        for (let i = 0; i < departmentTeams.teams.length - 1; i++) {
            this.FooterHead = new Component(this.table.component, "tr", "footer__head");
            this.FooterName = new Component(this.table.component, "td", "footer__name");
            this.FooterHead.render();
            this.FooterHead.component.insertAdjacentElement('afterbegin', this.FooterName.component);
            this.FooterName.component.textContent = "Day-Person-Starts";
        };
        this.FooterDescr = new Component(this.component, "div", "footer__descr");
        this.FooterBlock = new Component(this.component, "div", "footer__block");
        this.FooterBlockTitle = new Component(this.component, "span", "footer__block--title");
        this.FooterBlockIcon = new Component(this.component, "i", "icon icon-001-group");
        this.FooterBlockCount = new Component(this.component, "span", "footer__block--count");


        this.monthPicker = new MonthPicker("#app", "div", "month-picker", this.calendarHead, this.arrBody);
    }


    render() {
        this.monthPicker.render();
        this.calendarHead.render();
        this.calendarHead.prepend(new Component(this.calendarHead.component, 'td', 'add-vacation').component);
        this.table.render();
        this.FooterHeadRenderDays();
        this.FooterDescrRender();
        this.FooterBlockRender();
    }
    FooterDescrRender() {
        this.FooterHead.component.insertAdjacentElement('afterend', this.FooterDescr.component);
        this.FooterDescr.component.textContent = "September teams Summary";
    }
    FooterBlockRender() {
        this.FooterDescr.component.insertAdjacentElement('afterend', this.FooterBlock.component);
        this.FooterBlock.component.insertAdjacentElement('afterbegin', this.FooterBlockTitle.component);
        this.FooterBlockTitle.component.textContent = "On vacation 15";
        this.FooterBlock.component.insertAdjacentElement('beforeend', this.FooterBlockIcon.component);
        this.FooterBlock.component.insertAdjacentElement('beforeend', this.FooterBlockCount.component);
        this.FooterBlockCount.component.textContent = "12%";
    }
    FooterHeadRenderDays() {

        for (let i = 1; i <= this.daysInCurrentMonth; i++) {
            const chosenDate = new Date(
                this.currentDate.getFullYear(),
                this.currentDate.getMonth(),
                i,
            );
            const [dayName] = dateFormatter
                .format(chosenDate)
                .replace(",", "")
                .split(" ");
            let day = new Day(this.calendarFooterHead.component, "td", "outputItem member-day", dayName.substr(0, 2));
            day.isWeekend();
            this.showDays.push(day);
            day.render();
            if (i === this.daysInCurrentMonth) {
                new Day(this.calendarFooterHead.component, "td", "outputItem member-day", "Sum").render();
            }
        }
    }


}