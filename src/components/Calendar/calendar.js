import { MonthPicker } from "../monthPicker";
import { Component } from "../component";
import { CalendarHead } from "../calendarHead";
import { CalendarBody } from "../calendarBody";
import { departmentTeams } from "../../data";


export class Calendar{
    constructor(departmentTeams) {
        this.currentDate = new Date();
        // this.table = new Table("#app","table","table", this.currentDate);
        this.table = new Component("#app", "table", "table");
        this.calendarHead = new CalendarHead(this.table.component, 'thead', 'calendar-head', this.currentDate);
        this.monthPicker = new MonthPicker("#app","div","month-picker", this.calendarHead);
    }
    render() {
        this.monthPicker.render();
        // this.calendarHead.setParent(this.table.component);
        this.calendarHead.render();
        this.calendarHead.prepend(new Component(this.calendarHead.component, 'td', 'add-vacation').component);
        this.table.render();
                               

    }

    addTeamBody(){
        for(let i = 0; i < departmentTeams.teams.length; i++){
            let teamBody = new CalendarBody(this.table, "tbody", "body", departmentTeams.teams[i], this.currentDate);
            teamBody.render();
        }
    }
}