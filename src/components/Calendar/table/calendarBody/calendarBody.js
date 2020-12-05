import { Component } from "../../..";

export class CalendarBody extends Component {
    constructor(parentSelector,tagName,className,department) {
        super(parentSelector,tagName,className,);
        this.department = department;
        this.teamHead = new Component(this.component, "td", "teamHead");
        // this.member = new Component(this.component, "div", "member");
        // console.log(this.department)
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
        console.log(this.department.members)
        for(let i=0; i<this.department.members.length; i++){
            this.member = new Component(this.component, "td", "member");
            this.component.insertAdjacentElement('beforeend', this.member.component);
        }

        
    }

}