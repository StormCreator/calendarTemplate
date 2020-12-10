import { dateFormatter } from "../../utils";

export class Component {
  constructor(parentSelector, tagName = "div", className = "") {
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

  getComponent() {
    return this.component;
  }

  hideComponent() {
    this.component.classList.add("close-item");
  }

  toggleComponent() {
    if(this.component.classList.contains("member")){
      this.component.classList.toggle("hide-member");
    }else{
      this.component.classList.toggle("close-item");
    }
  }

  showComponent() {
    this.component.style.display = "block";
  }

  appendAfter(element) {
    this.component.insertAdjacentElement("afterbegin", element);
  }

  prepend(element) {
    this.component.prepend(element);
  }

  addClass(className) {
    this.component.classList.add(className);
  }

  setParent(parent) {
    this.parent = parent;
  }

  updateData(fixedDayCount, daysInCurrentMonth, hideDays, showDays) {
    if (fixedDayCount % daysInCurrentMonth > hideDays.length) {
      const days = (fixedDayCount % daysInCurrentMonth) - hideDays.length;
      for (let index = 0; index < days; index++) {
        showDays[showDays.length - 1].hideComponent();
        hideDays.unshift(showDays[showDays.length - 1]);
        showDays.pop();
      }
    } else {
      const days = hideDays.length - (fixedDayCount % daysInCurrentMonth);
      for (let index = 0; index < days; index++) {
        showDays.push(hideDays[0]);
        showDays[showDays.length - 1].showComponent();
        hideDays.shift();
      }
    }
  }

  updateDayName(currentDate, showDays) {
    for (const [index, showDay] of showDays.entries()) {
      const chosenDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        index + 1,
      );
      const [dayName] = dateFormatter
        .format(chosenDate)
        .replace(",", "")
        .split(" ");
      showDay.setLabelName(dayName.slice(0, 2));
    }
  }
}
