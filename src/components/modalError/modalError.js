import { Modal } from "../modal";
import { Component } from "../component";

export class ModalError extends Modal {
    constructor(args) {
        // let {
        //     parentSelector:parentSelector,
        //     dayFrom:beginDate,
        //     dayTo:endDate,
        //     closeOnBackdrop:closeOnBackdrop,
        //     swap:swap,
        //     selectItems:selectItems
        // } = args;
        super(args);

        this.content = new Component(this.component,"div","modal modal--loader");
        this.loader = new Component(this.content.component,"div","modal__loader modal__loader--error");
        this.loader.component.textContent="+";
        this.message = new Component(this.content.component,"p","modal__message");
        this.message.component.textContent="Ooops("
        this.description = new Component(this.content.component,"div","modal__description-wrapper");
        this.text = new Component(this.description.component,"p","modal__description-text");
        this.text.component.textContent="It seems like you've got an error."
        this.tryAgain = new Component(this.description.component,"p","modal__description-text");
        this.tryAgain.component.textContent="Try again later."
    }

    render(){
        super.render();
        this.content.render();
        this.loader.render();
        this.message.render();
        this.description.render();
        this.text.render();
        this.tryAgain.render();
        
    }

}