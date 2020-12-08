import { Component } from "../component";
import { Day } from "../Day/";
import { dateFormatter } from "../../utils/";



export class Member extends Component {
    constructor(parentSelector, tagName, className, member, currentDate) {
        super(parentSelector, tagName, className, );
        this.member = member;
        this.name = member.name;
        this.vocation = this.member.vacations;
        this.memberName = new Component(this.component, "td", "memberName");
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

    render() {
        super.render();
        this.memberName.component.textContent = this.name;
        this.vacations();
        this.renderMemberName();
        this.renderDate();
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
    
    updateDays(currentDate){
        this.vacations();
        this.setCurrentDate(currentDate);
        this.setDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
        this.inOneMonth ()
        this.updateData(this.fixedDayCount, this.daysInCurrentMonth, this.hideDays, this.showDays);
        this.updateDayName(this.currentDate, this.showDays);
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
            this.day = new Day(this.component, "td", "outputItem", dayName.substr(0, 2))
            this.day.addClass('member-day');
            this.day.isWeekend();
            this.showDays.push(this.day); 
            this.inOneMonth () 
            this.day.render();
            if(i === this.daysInCurrentMonth){
                let summary = new Day(this.component, "td", "outputItem headerDay", "Sum");
                summary.component.classList.add("member-day");
                summary.render();
            }
        }
    }

    vacations(){
        let arrVocation = [];
        for(let i=0; i<this.vocation.length; i++){
            let objVacation = {};
            objVacation.start = new Date((this.vocation[i].startDate).split('.').reverse().join('-'))
            objVacation.end = new Date ((this.vocation[i].endDate).split('.').reverse().join('-'))
            objVacation.yearStart = objVacation.start.getFullYear()
            objVacation.monthStart = objVacation.start.getMonth()
            objVacation.dayStart = objVacation.start.getDate()
            objVacation.yearEnd = objVacation.end.getFullYear()
            objVacation.monthEnd = objVacation.end.getMonth()
            objVacation.yearEnd = objVacation.end.getFullYear()
            objVacation.dayEnd = objVacation.end.getDate()
            arrVocation.push(objVacation)
        }
        this.filter(arrVocation)
    }
    filter(arrVocation){
        let currentMonth = this.currentDate.getMonth()
        let result = arrVocation.filter(obj => {
            return obj.monthStart === currentMonth || obj.monthEnd === currentMonth ||
            this.currentDate.getTime() >= obj.start.getTime() && this.currentDate.getTime() <= obj.end.getTime()
        });
        this.vacationMember = result        
    }

    inOneMonth (){
        for(let l=0; l<this.showDays.length; l++){
            if(this.showDays[l]) {
                this.showDays[l].vacation = false;
            }
        } 
        if(this.vacationMember.length){
            for(let i=0; i<this.vacationMember.length; i++){
                if(this.vacationMember[i].monthStart === this.vacationMember[i].monthEnd &&
                    this.vacationMember[i].yearStart === this.currentDate.getFullYear()) {
                    this.day.firstDay = this.vacationMember[i].dayStart;
                    this.day.lastDay =  this.vacationMember[i].dayEnd; 
                        for(let j=this.day.firstDay - 1; j<this.day.lastDay; j++){
                            if(this.showDays[j]) {
                                this.showDays[j].vacation = true;
                            }
                        } 
                } else if(this.vacationMember[i].monthEnd === this.currentDate.getMonth() &&
                        this.vacationMember[i].yearEnd === this.currentDate.getFullYear() 
                ){
                    // this.day.firstDay = 0;
                    this.day.lastDay =  this.vacationMember[i].dayEnd; 

                        for(let j=0; j<this.day.lastDay; j++){
                            if(this.showDays[j]) {
                                this.showDays[j].vacation = true;
                            }
                        } 
                } else if(this.vacationMember[i].monthStart === this.currentDate.getMonth()&&
                        this.vacationMember[i].yearStart === this.currentDate.getFullYear() ){
                    this.day.firstDay = this.vacationMember[i].dayStart;
                    for(let j=this.day.firstDay-1; j<this.daysInCurrentMonth; j++){
                        if(this.showDays[j]) {
                            this.showDays[j].vacation = true;
                        }
                    } 

                } else if(this.vacationMember[i].monthStart !== this.currentDate.getMonth() && this.vacationMember[i].monthEnd !== this.currentDate.getMonth()){
                    for(let j=0; j<this.daysInCurrentMonth; j++){
                        if(this.showDays[j]) {
                            console.log(this.showDays)
                            this.showDays[j].vacation = true;
                        }
                    } 
                }
            }  
        }
    }

}