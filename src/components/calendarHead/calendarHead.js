import { Component } from "../component";
import { Day } from "../Day";
import { dateFormatter } from "../../utils";
import { departmentTeams } from "../../data";
// import { Modal } from "../modal";

import { ModalLoader } from "../modalLoader";
import { ModalError } from "../modalError";
import { ModalForm } from "../modalForm";

export class CalendarHead extends Component {
  constructor(parentSelector, tagName, className, currentDate) {
    super(parentSelector, tagName, className);
    this.currentDate = currentDate;
    this.daysInCurrentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    this.fixedDayCount = 31;
    this.showDays = [];
    this.hideDays = [];
    this.button = new Component(this.component, "button", "add-vacation");
    this.button.component.textContent = "Add Vacation";

    this.modalLoader = new ModalLoader({
      parentSelector: "#app",
      dayFrom: new Date(),
      dayTo: new Date(),
      closeOnBackdrop: false,
      swap: false,
      selectItems: departmentTeams.teams[0].members,
      options: departmentTeams.options,
    });

    this.modalError = new ModalError({
      parentSelector: "#app",
      dayFrom: new Date(),
      dayTo: new Date(),
      closeOnBackdrop: false,
      swap: false,
      selectItems: departmentTeams.teams[0].members,
      options: departmentTeams.options,
    });

    this.modalForm = new ModalForm({
      parentSelector: "#app",
      dayFrom: new Date(),
      dayTo: new Date(),
      closeOnBackdrop: false,
      swap: false,
      selectItems: departmentTeams.teams[0].members,
      options: departmentTeams.options,
      loadingHandler: this.modalLoader,
      errorHandler: this.modalError,
    });
  }

  setCurrentDate(date) {
    this.currentDate = date;
  }

  setDaysInMonth(year, month) {
    this.daysInCurrentMonth = new Date(year, month, 0).getDate();
  }

  render() {
    // super.render();
    this.parent.insertAdjacentElement("afterbegin", this.component);
    this.renderButton();
    this.renderDays();
  }

  renderDays() {
    for (let index = 1; index <= this.daysInCurrentMonth; index++) {
      const chosenDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), index);
      const [dayName] = dateFormatter.format(chosenDate).replace(",", "").split(" ");
      let day = new Day(this.component, "td", "outputItem headerDay", dayName.slice(0, 2), index);
      day.isWeekend();
      this.showDays.push(day);
      day.render();
      if (index === this.daysInCurrentMonth) {
        new Day(this.component, "td", "outputItem headerDay", "Sum").render();
      }
    }
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
      let days = (this.fixedDayCount % this.daysInCurrentMonth) - this.hideDays.length;
      for (let index = 0; index < days; index++) {
        this.showDays[this.showDays.length - 1].hideComponent();
        this.hideDays.unshift(this.showDays[this.showDays.length - 1]);
        this.showDays.pop();
      }
      this.updateDayName();
    } else {
      let days = this.hideDays.length - (this.fixedDayCount % this.daysInCurrentMonth);
      for (let index = 0; index < days; index++) {
        this.showDays.push(this.hideDays[0]);
        this.showDays[this.showDays.length - 1].showComponent();
        this.hideDays.shift();
      }
      this.updateDayName();
    }
  }

  renderButton() {
    this.component.insertAdjacentElement("afterbegin", this.button.component);
    this.button.component.addEventListener("click", () => {
      this.modalLoader.show();

      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify(departmentTeams),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setTimeout(() => {
            this.modalLoader.hide();
            this.modal = new ModalForm({
              parentSelector: "#app",
              dayFrom: new Date(),
              dayTo: new Date(2020, 11, 12),
              closeOnBackdrop: true,
              swap: true,
              selectItems: json.teams[0].members,
              options: json.options,
              loadingHandler: this.modalLoader,
              errorHandler: this.modalError,
            });
            this.modal.render();
            this.modal.show();
          }, 2000);
        });

      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify(departmentTeams),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

      this.modalLoader.render();
    });
  }
}
