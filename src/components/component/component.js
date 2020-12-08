import { dateFormatter } from "../../utils";

export class Component {
  constructor(parentSelector, tagName = "div", className = '') {
    if (typeof parentSelector === "string") {
      this.parent = document.querySelector(parentSelector);
    } else {
      this.parent = parentSelector;
    }
    this.component = document.createElement(tagName);
    this.component.className = className;
  }

  render() {
    this.parent.append(this.component);
    // return this.component;
  }

  getComponent(){
    return this.component;
  }

  hideComponent(){
    this.component.classList.add('close-item');
  }
toggleComponent(){
    this.component.classList.toggle('close-item');
  }
  showComponent(){
    this.component.style.display = "block";
  }

  appendAfter(element){
    this.component.insertAdjacentElement("afterbegin", element);
  }

  prepend(element){
    this.component.prepend(element);
  }

  addClass(className){
    this.component.classList.add(className);
  }
  
  setParent(parent){
    this.parent = parent;
  }

  getParent(){
    console.log(this.parent);
  }
  
  updateData(fixedDayCount, daysInCurrentMonth, hideDays, showDays){
    if( fixedDayCount % daysInCurrentMonth > hideDays.length)
    {
        let days = fixedDayCount % daysInCurrentMonth - hideDays.length;
        for(let i = 0; i < days; i++){
            this.showDays[showDays.length-1].hideComponent();
            this.hideDays.unshift(showDays[showDays.length-1]);
            this.showDays.pop();
        }
    }
    else{
        let days = hideDays.length - fixedDayCount % daysInCurrentMonth;
        for(let i = 0; i < days; i++){
            showDays.push(hideDays[0]);
            showDays[showDays.length-1].showComponent();
            hideDays.shift();
        }
    }
  }

  updateDayName(currentDate, showDays){
    console.log(showDays.length);
    for(let i = 0; i < showDays.length; i++){
      const chosenDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          i+1,
      );
      console.log(chosenDate);
      const [dayName] = dateFormatter
      .format(chosenDate)
      .replace(",", "")
      .split(" ");
      showDays[i].setLabelName(dayName.substr(0, 2));
    }  
  }

}
