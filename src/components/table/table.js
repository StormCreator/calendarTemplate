import { Component } from "../component";

export class Table extends Component {
    constructor(parentSelector,tagName,className) {
        super(parentSelector,tagName,className,);
    }  
    render() {
        super.render();
    }

    setTableHead(tableHead){
        this.tableHead = tableHead;
    }
}


