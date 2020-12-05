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
    return this.component;
  }
  hide() {
    console.log('у')
  }
  // hide
  // open
}
