import { Component } from "../component";

export class Modal extends Component {
  constructor(arguments_) {
    const {
      parentSelector,
      beginDate,
      endDate,
      closeOnBackdrop,
      swap,
      selectItems,
    } = arguments_;
    super(parentSelector, "div", "modal-wrapper modal-wrapper--hidden");
    this.beginDate = beginDate;
    this.endDate = endDate;
    this.selectItems = selectItems;
    this.closeOnBackdrop = closeOnBackdrop;
    this.swap = swap;
    if (this.closeOnBackdrop === true) {
      this.component.addEventListener("click", this.hide.bind(this));
    }
  }

  render() {
    super.render();
  }

  show() {
    this.component.classList.remove("display-none");
    setTimeout(() => {
      this.component.classList.remove("modal-wrapper--hidden");
    }, 200);
  }

  hide() {
    this.component.classList.add("modal-wrapper--hidden");
    setTimeout(() => {
      this.component.classList.add("display-none");
    }, 200);
  }
}
