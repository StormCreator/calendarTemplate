import { dateFormatter } from "../../utils";
import { Component } from "../component";

export class MonthPicker extends Component {
  constructor(parentSelector,tagName,className) {
    super(parentSelector,tagName,className);
    this.currentDate = new Date();
    this.label = new Component(this.component, "h1", "month");
    this.arrowPrev = new Component(this.component, "i", "arrowPrev icon icon-Arrow-2");
    this.arrowNext = new Component(this.component, "i", "arrowNext icon icon-Arrow-3");
  }

  render() {
    super.render();
    this.createCurrentLabel();
    this.renderArrow();
  }

  createCurrentLabel() {
    this.component.prepend(this.label.component);
    this.updateCurrentLabel(this.currentDate);
  }

  updateCurrentLabel(date) {
    const { component: label } = this.label;
    let currentMonth = dateFormatter
      .format(new Date(date))
      .replace(",", "")
      .split(" ")[1];
      label.textContent =  currentMonth + ' ' + this.currentDate.getFullYear()
  }
  renderArrow(){
    this.component.insertAdjacentElement('afterbegin',this.arrowPrev.component);
    this.component.insertAdjacentElement('beforeend',this.arrowNext.component);
    
    this.arrowNext.component.addEventListener('click', this.nextMonth.bind(this))

    this.arrowPrev.component.addEventListener('click', this.prevMonth.bind(this))
  }
  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1,1);
    this.updateCurrentLabel(this.currentDate)
  }
  prevMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()-1,1);
    this.updateCurrentLabel(this.currentDate)
  }
}