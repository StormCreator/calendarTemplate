import { Component } from "../component";
import { CalendarBody } from "../calendarBody";
import { departmentTeams } from "../../data";

export class Table extends Component {
    constructor(parentSelector,tagName,className, currentDate) {
        super(parentSelector,tagName,className);
        this.currentDate = currentDate;
    }  
    render() {
        super.render();
        this.addTeamBody();
    }

    setTableHead(tableHead){
        this.tableHead = tableHead;
    }

    addTeamBody(){
        console.log(this.currentDate);
        for(let i = 0; i < departmentTeams.teams.length; i++){
            let teamBody = new CalendarBody(this.component, "tbody", "body", departmentTeams.teams[i], this.currentDate);
            teamBody.render();
        }
    }

}


