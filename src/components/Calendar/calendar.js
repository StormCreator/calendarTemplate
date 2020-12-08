import { MonthPicker } from "../monthPicker";
import { Component } from "../component";
import { CalendarHead } from "../calendarHead";
import { CalendarBody } from "../calendarBody";
import { departmentTeams } from "../../data";
import { Footer } from "../Footer";

export class Calendar {
    constructor(departmentTeams) {
        this.currentDate = new Date();
        // this.table = new Table("#app","table","table", this.currentDate);
        this.table = new Component("#app", "table", "table");
        this.calendarHead = new CalendarHead(
            this.table.component,
            "thead",
            "calendar-head",
            this.currentDate,
        );
        this.arrBody = [];
        for (let index = 0; index < departmentTeams.teams.length; index++) {
            this.calendarBody = new CalendarBody(
                this.table.component,
                "tbody",
                "body",
                departmentTeams.teams[index],
                this.currentDate,
                `id-${index}`,
            );
            this.calendarBody.render();
            this.arrBody.push(this.calendarBody);
        }

        this.monthPicker = new MonthPicker(
            "#app",
            "div",
            "month-picker",
            this.calendarHead,
            this.arrBody,
        );
        this.footer = new Footer("#app", "div", "footer");
    }

    render() {
        this.monthPicker.render();
        this.calendarHead.render();
        this.calendarHead.prepend(
            new Component(this.calendarHead.component, "td", "add-vacation")
            .component,
        );
        this.table.render();
        this.footer.render();
    }
}