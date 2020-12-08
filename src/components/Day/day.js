import { Component } from "../component";

export class Day extends Component{
    constructor(parentSelector, tagName, className, dayName = " ", dayNumber = " "){
        super(parentSelector, tagName, className);
        this.dayName = dayName;
        this.dayNumber = dayNumber;
        this.labelName = new Component(this.component, "span", "outputDay");
        this.labelNumber = new Component(this.component, "span", "outputDate");
    }


    render(){
        super.render();
        this.createCurrentLabel();
        this.checkHeadClass();
        // this.setLabelName(this.dayName);
        // this.setLabelNumber(this.dayNumber);
    }

    createCurrentLabel() {
        this.component.appendChild(this.labelName.component);
        this.component.appendChild(this.labelNumber.component);
    }

    setLabelName(dayName){
        if(this.component.classList.contains('weekend')){
            this.component.classList.remove('weekend');
        }
        if(this.component.classList.contains("headerDay")){
           this.labelName.component.textContent = dayName; 
        }
        
        this.dayName = dayName;
        this.isWeekend();
    }

    setLabelNumber(dayNumber){
        this.labelNumber.component.append(dayNumber);
    }

    hideComponent(){
        this.component.classList.add('close-item');
    }

    showComponent(){
        this.component.classList.remove('close-item');
    }

    isWeekend(){
        if(this.dayName === "Sa" || this.dayName === "Su"){
            this.component.classList.add('weekend');
        }
    }

    checkHeadClass(){
        if(this.component.classList.contains("headerDay")){
            this.setLabelName(this.dayName);
            this.setLabelNumber(this.dayNumber);
        }
    }

   
}