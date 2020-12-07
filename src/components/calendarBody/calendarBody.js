import { Component } from "../component";
import { Member } from "../member";
import { departmentTeams } from '../../data';

export class CalendarBody extends Component {
    constructor(parentSelector, tagName, className, department) {
        super(parentSelector, tagName, className, );
        this.department = department;
        this.teamHead = new Component(this.component, "tr", "teamHead");

    }
    render() {
        super.render();
        this.renderHead()
        this.renderMembersName()
    }
    renderHead() {
        this.component.insertAdjacentElement('afterbegin', this.teamHead.component);
        this.teamHead.component.textContent = this.department.name;
    }
    renderMembersName() {
        for (let i = 0; i < this.department.members.length; i++) {
            this.member = new Member(this.component, "tr", "member", this.department.members[i]);
            this.member.render();
        }
    }
}