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
  }
  hideDay(different,date){
    let arr = document.querySelectorAll('.day')
    date.setDate(1);
    for (let i=0; i<31; i++) {
      arr[i].style.display = 'inline';
      arr[i].setAttribute('data-date', `${date}`);
    }
    if(different){
      for (let i=1; i<=different; i++) {
      arr[(arr.length)-i].style.display = 'none';
    }
    }
  

  }

}
