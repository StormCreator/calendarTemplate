import { Table } from "../table";
import { MonthPicker } from "../monthPicker";



export class Calendar {
    constructor(departmentTeams) {
        this.monthPicker = new MonthPicker("#app","div","month-picker");
        this.table = new Table("#app","table","table",departmentTeams);
    }
    render() {
        console.log('s')
        setTimeout(() => this.monthPicker.render(), 0);
        setTimeout(() => this.table.render(), 0);
    }
  
  }
  
