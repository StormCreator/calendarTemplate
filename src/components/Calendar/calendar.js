import { MonthPicker } from "../monthPicker";
import { Component } from "../component";
import { CalendarHead } from "../calendarHead";
import { CalendarBody } from "../calendarBody";
import { ModalLoader } from "../modalLoader";
import { ModalError } from "../modalError";
import { ModalForm } from "../modalForm";

export class Calendar {
  constructor(departmentTeams) {
    this.currentDate = new Date();
    this.table = new Component("#app", "table", "table");
    this.modalLoader = new ModalLoader({
      parentSelector: "#app",
      closeOnBackdrop: false,
    });

    this.modalError = new ModalError({
      parentSelector: "#app",
      closeOnBackdrop: true,
    });

    this.modalForm = new ModalForm({
      parentSelector: "#app",
      dayFrom: new Date(),
      dayTo: new Date(),
      closeOnBackdrop: true,
      swap: true,
      selectItems: departmentTeams.teams[0].members,
      options: departmentTeams.options,
      modalError: this.modalError,
      modalLoader: this.modalLoader,
    });
    this.calendarHead = new CalendarHead(this.table.component, "thead", "calendar-head", this.currentDate, this.modalForm, this.modalError, this.modalLoader);
    this.arrBody = [];
    for (let index = 0; index < departmentTeams.teams.length; index++) {
      this.calendarBody = new CalendarBody(this.table.component, "tbody", "body", departmentTeams.teams[index], this.currentDate, `id-${index}`);
      this.calendarBody.render();
      this.arrBody.push(this.calendarBody);
    }
    this.monthPicker = new MonthPicker("#app", "div", "month-picker", this.calendarHead, this.arrBody);
  }

  render() {
    this.monthPicker.render();
    this.calendarHead.render();
    this.table.render();
    this.modalError.render();
    this.modalLoader.render();
    this.modalForm.render();
  }
}
