import { Component } from "../component";
import { Member } from "../member";
import { departmentTeams } from '../../data';

export class CalendarBody extends Component {
    constructor(parentSelector, tagName, className, department) {
        super(parentSelector, tagName, className, );
        this.department = department;
        this.teamHead = new Component(this.component, "tr", "teamHead")
        this.teamHeadName = new Component(this.component, "td", "teamHead-name");
        this.teamHeadIcon = new Component(this.component, "i", "icon icon-001-group");
        this.teamHeadCount = new Component(this.component, "span", "teamhead-count");
        this.teamHeadArrow = new Component(this.component, "i", "icon icon-chevron-down-solid");


    }
    render() {
        super.render();
        this.renderHead()
        this.renderHeadName()
        this.renderMembersName()
        this.renderHeadIcon()
        this.renderHeadCount()
        this.renderHeadArrow()
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
    }
    renderMembersName() {
        for (let i = 0; i < this.department.members.length; i++) {
            this.member = new Member(this.component, "tr", "member", this.department.members[i]);
            this.member.render();
        }
    }
}