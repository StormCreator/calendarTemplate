import { Component } from "../component";
import { departmentTeams } from '../../data';


export class Member extends Component {
    constructor(parentSelector, tagName, className, member) {
        super(parentSelector, tagName, className, );
        this.member = member;
        this.name = member.name;
        this.memberName = new Component(this.component, "td", "memberName");
        this.sumName = new Component(this.component, "td", "sumName");
    }

    render() {
        super.render();
        this.memberName.component.textContent = this.name;
        this.renderMemberName()
        this.renderDate()
        this.renderSumname()
    }

    renderMemberName() {
        this.component.insertAdjacentElement('afterbegin', this.memberName.component);


    }
    renderSumname() {
        this.component.insertAdjacentElement('beforeend', this.sumName.component);
        this.sumName.component.textContent = 'Sum';
    }
    renderDate() {
        for (let i = 1; i <= 31; i++) {
            this.Day = new Component(this.component, "td", "day");
            this.Day.render();
        }
    }
}