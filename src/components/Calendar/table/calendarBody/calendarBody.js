import { Component } from "../../..";

export class CalendarBody extends Component {
    constructor(parentSelector,tagName,className,departmentTeams) {
        super(parentSelector,tagName,className,);
        this.departmentTeams = departmentTeams;
        this.team = new Component(this.component, "div", "team");
    }  


    render() {
        super.render();
        this.component.insertAdjacentElement('beforeend', this.team.component);
        // this.hide();
        
    }
    h(){
        console.log(this.departmentTeams.teams)
    }

}