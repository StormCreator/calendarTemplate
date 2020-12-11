import { MonthPicker } from "../monthPicker";
import { Component } from "../component";
import { CalendarHead } from "../calendarHead";
import { CalendarBody } from "../calendarBody";

export class Calendar {
  constructor(departmentTeams) {
    this.currentDate = new Date();
    this.table = new Component("#app", "table", "table");
    this.calendarHead = new CalendarHead(this.table.component, "thead", "calendar-head", this.currentDate);
    this.arrBody = [];
    this.color = ['colorPurple','colorOrange']
    for (let index = 0; index < departmentTeams.teams.length; index++) {
      this.calendarBody = new CalendarBody(this.table.component, "tbody", "body", departmentTeams.teams[index], this.currentDate, `id-${index}`, this.color[index]);
      this.calendarBody.render();
      this.arrBody.push(this.calendarBody);
    }
    this.monthPicker = new MonthPicker("#app", "div", "month-picker", this.calendarHead, this.arrBody);
  }

  render() {
    this.monthPicker.render();
    this.calendarHead.render();
    this.table.render();
  }
}
