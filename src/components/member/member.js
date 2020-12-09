import { Component } from "../component";
import { Day } from "../Day";
import { dateFormatter } from "../../utils";

export class Member extends Component {
    constructor(parentSelector, tagName, className, member, currentDate) {
        super(parentSelector, tagName, className);
        this.member = member;

        this.name = member.name;
        this.vocation = this.member.vacations;
        this.memberName = new Component(this.component, "td", "memberName");
        this.currentDate = currentDate;
        // console.log(this.currentDate);
        this.daysInCurrentMonth = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() + 1,
            0,
        ).getDate();
        this.fixedDayCount = 31;
        this.showDays = [];
        this.hideDays = [];
    }

    render() {
        super.render();
        this.vacations();
        this.renderMemberName();
        this.memberName.component.textContent = this.name;
        this.renderDate();

    }


    renderMemberName() {
        this.component.insertAdjacentElement(
            "afterbegin",
            this.memberName.component,
        );
        this.memberName.addClass("teamHead-name");
    }

    setCurrentDate(date) {
        this.currentDate = date;
    }

    setDaysInMonth(year, month) {
        this.daysInCurrentMonth = new Date(year, month, 0).getDate();
    }

    updateDayName() {
        for (let index = 0; index < this.showDays.length; index++) {
            const chosenDate = new Date(
                this.currentDate.getFullYear(),
                this.currentDate.getMonth(),
                index + 1,
            );
            const [dayName] = dateFormatter
                .format(chosenDate)
                .replace(",", "")
                .split(" ");
            this.showDays[index].setLabelName(dayName.slice(0, 2));
        }
    }

    updateDays(currentDate) {
        this.vacations();
        this.setCurrentDate(currentDate);
        this.getSum();
        this.summary.setLabelName(this.sum);

        this.setDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
        this.inOneMonth();

        if (this.fixedDayCount % this.daysInCurrentMonth > this.hideDays.length) {
            const days =
                (this.fixedDayCount % this.daysInCurrentMonth) - this.hideDays.length;
            for (let index = 0; index < days; index++) {
                this.showDays[this.showDays.length - 1].hideComponent();
                this.hideDays.unshift(this.showDays[this.showDays.length - 1]);
                this.inOneMonth();
                this.showDays.pop();
            }
            this.updateDayName();
            this.getSum();
            this.summary.setLabelName(this.sum);
        } else {
            const days =
                this.hideDays.length - (this.fixedDayCount % this.daysInCurrentMonth);
            for (let index = 0; index < days; index++) {
                this.showDays.push(this.hideDays[0]);
                this.showDays[this.showDays.length - 1].showComponent();
                this.inOneMonth();
                this.hideDays.shift();
            }
            this.updateDayName();
            this.getSum();
            this.summary.setLabelName(this.sum);
        }
    }

    renderDate() {
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
            this.day = new Day(
                this.component,
                "td",
                "outputItem",
                dayName.slice(0, 2),
            );
            this.day.addClass("member-day");
            this.day.isWeekend();
            this.showDays.push(this.day);
            this.inOneMonth();
            this.day.render();
            if (index === this.daysInCurrentMonth) {
                this.getSum();
                this.summary = new Day(
                    this.component,
                    "td",
                    "outputItem headerDay",
                    `${this.sum}`,
                );

                this.summary.component.classList.add("member-day");
                this.summary.render();
            }
        }
    }

    vacations() {
        const arrayVocation = [];
        for (let index = 0; index < this.vocation.length; index++) {
            const objectVacation = {};
            objectVacation.start = new Date(
                this.vocation[index].startDate.split(".").reverse().join("-"),
            );
            objectVacation.end = new Date(
                this.vocation[index].endDate.split(".").reverse().join("-"),
            );
            objectVacation.yearStart = objectVacation.start.getFullYear();
            objectVacation.monthStart = objectVacation.start.getMonth();
            objectVacation.dayStart = objectVacation.start.getDate();
            objectVacation.yearEnd = objectVacation.end.getFullYear();
            objectVacation.monthEnd = objectVacation.end.getMonth();
            objectVacation.yearEnd = objectVacation.end.getFullYear();
            objectVacation.dayEnd = objectVacation.end.getDate();
            arrayVocation.push(objectVacation);
        }
        this.filter(arrayVocation);
    }

    filter(arrayVocation) {
        const currentMonth = this.currentDate.getMonth();
        const result = arrayVocation.filter((object) => {
            return (
                object.monthStart === currentMonth ||
                object.monthEnd === currentMonth ||
                (this.currentDate.getTime() >= object.start.getTime() &&
                    this.currentDate.getTime() <= object.end.getTime())
            );
        });
        this.vacationMember = result;
    }

    inOneMonth() {
        for (let l = 0; l < this.showDays.length; l++) {
            if (this.showDays[l]) {
                this.showDays[l].vacation = false;
            }
        }
        if (this.vacationMember.length > 0) {
            for (let index = 0; index < this.vacationMember.length; index++) {
                if (
                    this.vacationMember[index].monthStart ===
                    this.vacationMember[index].monthEnd &&
                    this.vacationMember[index].yearStart ===
                    this.currentDate.getFullYear()
                ) {
                    this.day.firstDay = this.vacationMember[index].dayStart;
                    this.day.lastDay = this.vacationMember[index].dayEnd;
                    for (
                        let iteration = this.day.firstDay - 1; iteration < this.day.lastDay; iteration++
                    ) {
                        if (this.showDays[iteration]) {
                            this.showDays[iteration].vacation = true;
                        }
                    }
                } else if (
                    this.vacationMember[index].monthEnd === this.currentDate.getMonth() &&
                    this.vacationMember[index].yearEnd === this.currentDate.getFullYear()
                ) {
                    this.day.lastDay = this.vacationMember[index].dayEnd;

                    for (let iteration = 0; iteration < this.day.lastDay; iteration++) {
                        if (this.showDays[iteration]) {
                            this.showDays[iteration].vacation = true;
                        }
                    }
                } else if (
                    this.vacationMember[index].monthStart ===
                    this.currentDate.getMonth() &&
                    this.vacationMember[index].yearStart ===
                    this.currentDate.getFullYear()
                ) {
                    this.day.firstDay = this.vacationMember[index].dayStart;
                    for (
                        let iteration = this.day.firstDay - 1; iteration < this.daysInCurrentMonth; iteration++
                    ) {
                        if (this.showDays[iteration]) {
                            this.showDays[iteration].vacation = true;
                        }
                    }
                } else if (
                    this.vacationMember[index].monthStart !==
                    this.currentDate.getMonth() &&
                    this.vacationMember[index].monthEnd !== this.currentDate.getMonth()
                ) {
                    for (
                        let iteration = 0; iteration < this.daysInCurrentMonth; iteration++
                    ) {
                        if (this.showDays[iteration]) {
                            this.showDays[iteration].vacation = true;
                        }
                    }
                }
            }
        }
    }

    getSum() {
        const vacations = this.component.querySelectorAll(".vacation").length;

        const vacationWeekend = this.component.querySelectorAll(".vacation.weekend")
            .length;
        this.sum = vacations - vacationWeekend;
    }
}