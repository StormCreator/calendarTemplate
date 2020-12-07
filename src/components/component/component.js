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

  showComponent(){
    this.component.style.display = "block";
  }

  appendAfter(element){
    this.component.insertAdjacentElement("afterbegin", component);
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

}
