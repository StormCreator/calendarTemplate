import { Modal } from "../modal";
import { Component } from "../component";

export class ModalForm extends Modal {
  constructor(arguments_) {
    const {
      parentSelector,
      dayFrom: beginDate,
      dayTo: endDate,
      closeOnBackdrop,
      swap,
      selectItems,
      options,
      loadingHandler,
      errorHandler,
    } = arguments_;
    super(arguments_);

    this.content = new Component(this.component, "div", "modal");
    this.heading = new Component(this.content.component, "div", "modal__head");
    this.title = new Component(this.heading.component, "p", "modal__title");
    this.title.component.textContent = "Vacation Request";
    this.form = new Component(this.content.component, "div", "modal__form");
    this.subtitle1 = new Component(
      this.form.component,
      "div",
      "modal__subtitle",
    );
    this.subtitle1.component.textContent = "Days";
    this.inputsWrapper = new Component(
      this.form.component,
      "div",
      "modal__input-wrapper",
    );
    this.fromLabel = new Component(
      this.inputsWrapper.component,
      "p",
      "modal__input-label",
    );
    this.fromLabel.component.textContent = "From";
    this.toLabel = new Component(
      this.inputsWrapper.component,
      "p",
      "modal__input-label",
    );
    this.toLabel.component.textContent = "To";
    this.from = new Component(
      this.inputsWrapper.component,
      "input",
      "modal__input",
    );
    this.to = new Component(
      this.inputsWrapper.component,
      "input",
      "modal__input",
    );
    this.from.component.setAttribute("type", "date");
    this.to.component.setAttribute("type", "date");
    this.from.component.value = beginDate.toISOString().slice(0, 10);
    this.to.component.value = endDate.toISOString().slice(0, 10);
    this.daysCount = new Component(
      this.heading.component,
      "p",
      "modal__days-count",
    );
    this.subtitle2 = new Component(
      this.form.component,
      "div",
      "modal__subtitle",
    );
    this.subtitle2.component.textContent = "Vac Type";
    this.types = new Component(this.form.component, "select", "modal__select");
    options.forEach((element) => {
      const newOption = new Option(element, element);
      this.types.component.append(newOption);
    });
    this.buttonWrapper = new Component(
      this.form.component,
      "div",
      "modal__buttons",
    );
    this.buttonClose = new Component(
      this.buttonWrapper.component,
      "button",
      "modal__close",
    );
    this.buttonClose.component.textContent = "Close";
    this.buttonSend = new Component(
      this.buttonWrapper.component,
      "button",
      "modal__send",
    );
    this.buttonSend.component.textContent = "Send";
    this.loadingHandler = loadingHandler;
    this.errorHandler = errorHandler;
  }

  render() {
    super.render();
    this.content.render();
    this.heading.render();
    this.title.render();
    this.daysCount.render();
    this.form.render();
    this.subtitle1.render();
    this.inputsWrapper.render();
    this.fromLabel.render();
    this.toLabel.render();
    this.from.render();
    this.to.render();
    this.content.component.addEventListener("click", (event) => {
      event.stopPropagation();
    });
    this.countDifference();
    this.from.component.addEventListener(
      "change",
      this.countDifference.bind(this),
    );
    this.to.component.addEventListener(
      "change",
      this.countDifference.bind(this),
    );
    this.subtitle2.render();
    this.types.render();
    this.buttonWrapper.render();
    this.buttonSend.render();
    this.buttonSend.component.addEventListener("click", this.send.bind(this));
    this.buttonClose.render();
    this.buttonClose.component.addEventListener("click", super.hide.bind(this));
  }

  swapDates() {
    const temporary1 = this.from.component.value;
    const temporary2 = this.to.component.value;
    this.from.component.value = temporary2;
    this.to.component.value = temporary1;
  }

  countDifference() {
    const temporary1 = Date.parse(this.from.component.value);
    const temporary2 = Date.parse(this.to.component.value);
    this.dateDifference = Math.floor(
      (temporary2 - temporary1) / (24 * 60 * 60 * 1000),
    );
    if (this.dateDifference < 0) {
      this.swapDates();
      this.countDifference();
    }
    this.daysCount.component.textContent = `${this.dateDifference} days`;
  }

  hide() {
    super.hide();
  }

  show() {
    super.show();
  }

  send() {
    super.hide();
    this.loadingHandler.show();
    const temporary = this;
    setTimeout(() => {
      temporary.loadingHandler.hide();
      temporary.errorHandler.show();
    }, 2000);
  }
}
