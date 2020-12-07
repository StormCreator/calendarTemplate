import { Component } from "../component";
import { Member } from "../member";

export class CalendarBody extends Component {
    constructor(parentSelector,tagName,className,department) {
        super(parentSelector,tagName,className,);
        this.department = department;
        this.teamHead = new Component(this.component, "td", "teamHead");

    }  


    render() {
        super.render();
        this.renderHead()
        this.renderMembers()
    }
    renderHead() {
        this.component.insertAdjacentElement('beforeend', this.teamHead.component);
    }

    renderMembers(){

        for(let i=0; i<this.department.members.length; i++){
            this.member = new Member(this.component, "td", "member",this.department.members[i]);
            this.component.insertAdjacentElement('beforeend', this.member.component);
        }

        
    }

}