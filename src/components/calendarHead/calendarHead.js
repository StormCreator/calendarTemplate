import { Component } from "../component";
import { Day } from "../day";

export class CalendarHead extends Component {
    constructor(parentSelector,tagName,className,departmentTeams,currentDate,daysInCurrentMonth) {
        super(parentSelector,tagName,className,);
        this.departmentTeams = departmentTeams;
        this.currentDate = currentDate;
        this.daysInCurrentMonth = daysInCurrentMonth;
        this.row = new Component(this.component, "tr", "row");
        this.coverBtn = new Component(this.component, "td", "coverBtn");
        this.btn = new Component(this.component, "button", "btn"); 
        this.btn.component.textContent = 'vocation'
        this.sumText = new Component(this.component, "td", "sumText");
        // this.prevMonth = this.daysInCurrentMonth   

    } 
    render() {

        super.render();
        this.component.insertAdjacentElement('afterbegin', this.row.component);
        this.renderBtn();
        this.days();
        this.countDay ();
        this.renderSumText ()
      
      
      }
      renderBtn (){
        this.row.component.insertAdjacentElement('afterbegin', this.coverBtn.component);
        this.coverBtn.component.insertAdjacentElement('afterbegin', this.btn.component);
      } 

      days(){
        this.arr = []
        for (let i=1; i<=31; i++) {
          this.day = new Day(this.row.component, "td", "day", i,this.currentDate);
          this.arr.push(this.day)
          this.day.render();
        }
        console.log(this.arr)
        this.addHideDay() 

      }

      
      countDay (currentDate){
          this.currentDate = currentDate || this.currentDate;
          this.daysInCurrentMonth = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() + 1,
            0,
          ).getDate();
          
        
          this.addHideDay()         
      }

      addHideDay() {
        let different = 31 - this.daysInCurrentMonth;

        this.hideDay(different,this.currentDate)

        for(let i=0; i<this.arr.length; i++){ 
            this.arr[i].currentDate = this.currentDate;
            this.arr[i].getWeek()
          }

      }



      renderSumText (){
        this.sumText.component.textContent = 'SUM'
        this.row.component.insertAdjacentElement('beforeend', this.sumText.component);
      }
    }