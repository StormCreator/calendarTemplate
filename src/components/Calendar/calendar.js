import { Table } from "../table";
import { MonthPicker } from "../monthPicker";
import { Component } from "../component";
import { CalendarHead } from "../calendarHead";



export class Calendar{
    constructor(departmentTeams) {
        this.currentDate = new Date();
        this.table = new Table("#app","table","table", this.currentDate);
        this.calendarHead = new CalendarHead("#app", 'thead', 'calendar-head', this.currentDate);
        this.monthPicker = new MonthPicker("#app","div","month-picker", this.calendarHead);
    }
    render() {
        this.monthPicker.render();
        this.calendarHead.setParent(this.table.component);
        this.calendarHead.render();
        this.calendarHead.prepend(new Component(this.calendarHead.component, 'td', 'add-vacation').component);
        this.table.render();

    }


}