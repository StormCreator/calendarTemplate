import { Component } from "../..";
import { CalendarHead } from "..";
import { CalendarBody } from "..";

export class Table extends Component {
    constructor(parentSelector,tagName,className,departmentTeams) {
        super(parentSelector,tagName,className,);
        this.departmentTeams = departmentTeams;
        this.calendarHead = new CalendarHead(this.component, "thead", "months",this.departmentTeams);
        
    }  
    render() {
        super.render();
         this.component.prepend(this.calendarHead.component);
         this.renderBody()
      }
    renderBody(){
        // let arr = [];
        for(let i = 0; i<this.departmentTeams.teams.length; i++){
            this.calendarBody = new CalendarBody(this.component, "tbody", "body",this.departmentTeams.teams[i]);
            // arr.push(this.calendarBody);
            this.calendarBody.render();
        }
    }


}


