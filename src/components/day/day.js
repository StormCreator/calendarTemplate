import { Component } from "../component";
export class Day extends Component {
    constructor(parentSelector,tagName,className,num,currentDate) {
        super(parentSelector,tagName,className,);
        this.num = num;
        this.currentDate = currentDate;
    } 

    render() {
        super.render();
        this.dateNum();
    }
    dateNum(){

        this.component.insertAdjacentHTML('beforeend', `<span>${this.num}</span>`);
               

    }
    getWeek(){
        // this.day = document.querySelector('.day').getAttribute('data-date');
        console.log(this.currentDate)
        this.week =new Date(this.currentDate).getDay();

        
        this.component.insertAdjacentHTML('beforeend', `<span>${this.week}</span>`);   

      }
}