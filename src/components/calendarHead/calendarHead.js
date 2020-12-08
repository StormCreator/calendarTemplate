import { Component } from "../component";
import { Day } from "../Day";
import { dateFormatter } from "../../utils/";

export class CalendarHead extends Component {

    constructor(parentSelector,tagName,className, currentDate) {
        super(parentSelector,tagName,className);
        this.currentDate = currentDate;
        this.daysInCurrentMonth = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() + 1,
            0
        ).getDate();
        this.fixedDayCount = 31;
        this.showDays = [];
        this.hideDays = [];
    }

    setCurrentDate(date){
        this.currentDate = date;
    }

    setDaysInMonth(year, month){
        this.daysInCurrentMonth = new Date(
            year,
            month,
            0
        ).getDate();
    }

    render(){
        // super.render();
        this.parent.insertAdjacentElement('afterbegin',this.component);
        this.renderDays();
    }

    renderDays(){
        for(let i = 1; i <= this.daysInCurrentMonth; i++){
            const chosenDate = new Date(
                this.currentDate.getFullYear(),
                this.currentDate.getMonth(),
                i,
            );
            const [dayName] = dateFormatter
            .format(chosenDate)
            .replace(",", "")
            .split(" ");
            
            let day = new Day(this.component, "td", "outputItem headerDay", dayName.substr(0, 2), i);
            day.isWeekend();
            this.showDays.push(day); 
            day.render();
            if(i === this.daysInCurrentMonth){
                new Day(this.component, "td", "outputItem headerDay", "Sum").render();
            }
        }     
        
    }

    updateDayName(){
        for(let i = 0; i < this.showDays.length; i++){
            const chosenDate = new Date(
                this.currentDate.getFullYear(),
                this.currentDate.getMonth(),
                i+1,
            );
            const [dayName] = dateFormatter
            .format(chosenDate)
            .replace(",", "")
            .split(" ");
            this.showDays[i].setLabelName(dayName.substr(0, 2));
        }   
    }

    updateDays(currentDate){
        this.setCurrentDate(currentDate);
        this.setDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
      
        if( this.fixedDayCount % this.daysInCurrentMonth > this.hideDays.length)
        {
            let days = this.fixedDayCount % this.daysInCurrentMonth - this.hideDays.length;
            for(let i = 0; i < days; i++){
                this.showDays[this.showDays.length-1].hideComponent();
                this.hideDays.unshift(this.showDays[this.showDays.length-1]);
                this.showDays.pop();
            }
            this.updateDayName();
        }
        else{
            let days = this.hideDays.length - this.fixedDayCount % this.daysInCurrentMonth;
            for(let i = 0; i < days; i++){
                this.showDays.push(this.hideDays[0]);
                this.showDays[this.showDays.length-1].showComponent();
                this.hideDays.shift();
            }
            this.updateDayName();
        }
    }
}