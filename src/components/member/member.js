import { Component } from "../component";
import { departmentTeams } from '../../data';
import { Day } from "../Day/";


export class Member extends Component {
    constructor(parentSelector, tagName, className, member, currentDate) {
        super(parentSelector, tagName, className, );
        this.member = member;
        this.name = member.name;
        this.memberName = new Component(this.component, "td", "memberName");
        this.currentDate = currentDate;
        this.daysInCurrentMonth = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() + 1,
            0
        ).getDate();
        // this.sumName = new Component(this.component, "td", "sumName");
    }

    render() {
        super.render();
        this.memberName.component.textContent = this.name;
        this.renderMemberName()
        this.renderDate()
    }

    renderMemberName() {
        this.component.insertAdjacentElement('afterbegin', this.memberName.component);
        this.memberName.addClass('teamHead-name');


    }

    renderDate() {
        for (let i = 1; i <= this.daysInCurrentMonth; i++) {
            this.Day = new Component(this.component, "td", "outputItem");
            this.Day.addClass('member-day');
            this.Day.render();
            if(i === this.daysInCurrentMonth){
                let summary = new Day(this.component, "td", "outputItem", "Sum");
                summary.component.classList.add("member-day");
                summary.render();
            }
        }
    }
}