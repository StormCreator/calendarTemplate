import { Component } from "../component";
import { CalendarHead } from "../calendarHead";
import { CalendarBody } from "../calendarBody";
import { departmentTeams } from "../../data";

export class Table extends Component {
    constructor(parentSelector,tagName,className,currentDate) {
        super(parentSelector,tagName,className,);
        this.currentDate = currentDate;
        this.departmentTeams = departmentTeams;    
    } 

    render() {
        super.render();
         this.countDay ();
         this.calendarHead = new CalendarHead(this.component, "thead", "months",this.departmentTeams,this.currentDate,this.daysInCurrentMonth);
         this.calendarHead.render();
         this.renderBody(this.currentDate)
         
      }

    
    renderBody(){
        for(let i = 0; i<this.departmentTeams.teams.length; i++){0
             
            this.calendarBody = new CalendarBody(this.component, "tbody", "body",this.departmentTeams.teams[i],this.currentDate);
            this.calendarBody.render();
        }
    }

    getDate (currentDate) {
        this.currentDate = currentDate;
        this.calendarHead.countDay(this.currentDate);
    }   
    countDay (){
          this.daysInCurrentMonth = new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth() + 1,
          0,
        ).getDate();
    
    }



}


