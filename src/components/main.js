import { Calendar } from "./Calendar";
import { Table } from "./Calendar";



export class Main {
    constructor(departmentTeams) {
        this.calendar = new Calendar("#app","div","month-picker");
        this.table = new Table("#app","table","table",departmentTeams);
    }
    render() {
        console.log('s')
        setTimeout(() => this.calendar.render(), 0);
        setTimeout(() => this.table.render(), 0);
    }
  
  }
  
