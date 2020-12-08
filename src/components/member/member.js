import { Component } from "../component";
import { departmentTeams } from '../../data';
import { Day } from "../Day/";
import { dateFormatter } from "../../utils/";



export class Member extends Component {
    constructor(parentSelector, tagName, className, member, currentDate) {
        super(parentSelector, tagName, className, );
        this.member = member;
        this.name = member.name;
        this.memberName = new Component(this.component, "td", "memberName");
        this.currentDate = currentDate;
        this.daysInCurrentMonth = new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth() + 1,
            0
        ).getDate();
        // this.sumName = new Component(this.component, "td", "sumName");
        this.fixedDayCount = 31;
        this.showDays = [];
        this.hideDays = [];
    
    }

    render() {
        super.render();
        this.memberName.component.textContent = this.name;
        this.renderMemberName()
        this.renderDate()
        // this.updateDays(this.currentDate)
        // this.renderDays()
    }

    renderMemberName() {
        this.component.insertAdjacentElement('afterbegin', this.memberName.component);
        this.memberName.addClass('teamHead-name');


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

    renderDate() {
        for (let i = 1; i <= this.daysInCurrentMonth; i++) {
            const chosenDate = new Date(
                this.currentDate.getFullYear(),
                this.currentDate.getMonth(),
                i,
            );
            const [dayName] = dateFormatter
            .format(chosenDate)
            .replace(",", "")
            .split(" ");
            let day = new Day(this.component, "td", "outputItem", dayName.substr(0, 2))
            day.addClass('member-day');
            day.isWeekend();
            this.showDays.push(day); 
            day.render();
            if(i === this.daysInCurrentMonth){
                let summary = new Day(this.component, "td", "outputItem headerDay", "Sum");
                summary.component.classList.add("member-day");
                summary.render();
            }
        }
    }


}