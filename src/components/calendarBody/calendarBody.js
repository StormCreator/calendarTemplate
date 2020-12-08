import { Component } from "../component";
import { Member } from "../member";
import { Day } from "../Day";
import { dateFormatter } from "../../utils/";
import { departmentTeams } from "../../data";

export class CalendarBody extends Component {
    constructor(parentSelector, tagName, className, department, currentDate, id) {
        super(parentSelector, tagName, className, );
        this.id = id;
        this.department = department;
        // this.parentSelector = parentSelector
        this.teamHead = new Component(this.component, "tr", "teamHead")
        this.teamHeadName = new Component(this.component, "td", "teamHead-name");
        this.teamHeadIcon = new Component(this.component, "i", "icon icon-001-group");
        this.teamHeadCount = new Component(this.component, "span", "teamhead-count");
        this.teamHeadArrow = new Component(this.component, "i", "icon icon-chevron-down-solid");
        this.currentDate = currentDate;
        this.arrMembers = [];
        this.daysInCurrentMonth = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() + 1,
            0
        ).getDate();
        this.fixedDayCount = 31;
        this.showDays = [];
        this.hideDays = [];
    }
    setCurrentDate(date) {
        this.currentDate = date;
    }

    setDaysInMonth(year, month) {
        this.daysInCurrentMonth = new Date(
            year,
            month,
            0
        ).getDate();
    }
    render() {
        // super.render();
        this.parent.insertAdjacentElement('beforeend', this.component);
        this.renderHead();
        this.renderHeadName();
        this.renderMembersName();
        this.renderHeadIcon();
        this.renderHeadCount();
        this.renderHeadArrow();
        this.renderDays();
    }

    renderHead() {
        this.component.insertAdjacentElement('afterbegin', this.teamHead.component);
    }
    renderHeadName() {
        this.teamHead.component.insertAdjacentElement('afterbegin', this.teamHeadName.component);
        this.teamHeadName.component.textContent = this.department.name;
    }

    renderHeadIcon() {
        this.teamHeadName.component.insertAdjacentElement('beforeend', this.teamHeadIcon.component)
    }
    renderHeadCount() {
        this.teamHeadName.component.insertAdjacentElement('beforeend', this.teamHeadCount.component);
        this.teamHeadCount.component.textContent = "8%";
    }
    renderHeadArrow() {
        this.teamHeadName.component.insertAdjacentElement('beforeend', this.teamHeadArrow.component);
        this.teamHeadArrow.component.addEventListener('click', this.hideMember.bind(this))
    }
    renderMembersName() {
        for (let i = 0; i < this.department.members.length; i++) {
            this.member = new Member(this.component, "tr", "member", this.department.members[i], this.currentDate);
            this.member.render();
            this.arrMembers.push(this.member)
        }
    }
    hideMember(e) {
        for (let i = 0; i < this.arrMembers.length; i++) {
            this.arrMembers[i].toggleComponent();
        }
        if (e.target.classList.contains("rotate-block")) {
            e.target.classList.remove("rotate-block");
        } else {
            e.target.classList.add("rotate-block");
        }
    }

    renderDays() {

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
            let day = new Day(this.teamHead.component, "td", "outputItem member-day", dayName.substr(0, 2));
            day.isWeekend();
            this.showDays.push(day);
            day.render();
            if (i === this.daysInCurrentMonth) {
                new Day(this.teamHead.component, "td", "outputItem member-day headerDay", "Sum").render();
            }
        }

    }


    updateDaysMembers(currentDate) {

        for (let i = 0; i < this.arrMembers.length; i++) {
            this.arrMembers[i].currentDate = currentDate;
            this.arrMembers[i].updateDays(currentDate);
        }
    }

    updateDayName() {
        for (let i = 0; i < this.showDays.length; i++) {
            const chosenDate = new Date(
                this.currentDate.getFullYear(),
                this.currentDate.getMonth(),
                i + 1,
            );
            const [dayName] = dateFormatter
                .format(chosenDate)
                .replace(",", "")
                .split(" ");
            this.showDays[i].setLabelName(dayName.substr(0, 2));
        }
    }

    updateDays(currentDate) {
        console.log(this.showDays)
        this.setCurrentDate(currentDate);
        this.setDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);

        if (this.fixedDayCount % this.daysInCurrentMonth > this.hideDays.length) {
            let days = this.fixedDayCount % this.daysInCurrentMonth - this.hideDays.length;
            for (let i = 0; i < days; i++) {
                this.showDays[this.showDays.length - 1].hideComponent();
                this.hideDays.unshift(this.showDays[this.showDays.length - 1]);
                this.showDays.pop();
            }
            this.updateDayName();
        } else {
            let days = this.hideDays.length - this.fixedDayCount % this.daysInCurrentMonth;
            for (let i = 0; i < days; i++) {
                this.showDays.push(this.hideDays[0]);
                this.showDays[this.showDays.length - 1].showComponent();
                this.hideDays.shift();
            }
            this.updateDayName();

        }
    }

}