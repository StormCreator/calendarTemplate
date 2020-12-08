import { Component } from "../component";
import { CalendarBody } from "../calendarBody";
import { departmentTeams } from "../../data";

export class Footer extends Component {
    constructor(parentSelector, tagName, className) {
        super(parentSelector, tagName, className);
        this.departmentTeams = departmentTeams;
        for (let i = 0; i < departmentTeams.teams.length - 1; i++) {
            this.FooterHead = new Component(this.component, "tr", "footer__head");
            this.FooterName = new Component(this.component, "td", "footer__name");
            // this.FooterHead.render();
            this.FooterHead.component.insertAdjacentElement("afterbegin", this.FooterName.component);
            this.FooterName.component.textContent = "Day-Person-Starts";
        }
        this.FooterDescr = new Component(this.component, "div", "footer__descr");
        this.FooterBlock = new Component(this.component, "div", "footer__block");
        this.FooterBlockTitle = new Component(this.component, "span", "footer__block--title");
        this.FooterBlockIcon = new Component(this.component, "i", "icon icon-001-group");
        this.FooterBlockCount = new Component(this.component, "span", "footer__block--count");
        this.FooterBlockCountPercent = new Component(this.component, "span", "footer__block--countpercent");


    }

    render() {
        super.render();
        this.FooterHeadRender();
        this.FooterDescrRender();
        this.FooterBlockRender();
    }
    FooterHeadRender() {
        this.component.insertAdjacentElement("beforeend", this.FooterHead.component);
        this.FooterHead.component.insertAdjacentElement("afterbegin", this.FooterName.component);
        this.FooterName.component.textContent = "Day-Person-Starts";

    }
    FooterDescrRender() {
        this.FooterHead.component.insertAdjacentElement("afterend", this.FooterDescr.component);
        this.FooterDescr.component.textContent = "September teams Summary";
    }

    FooterBlockRender() {
        this.FooterDescr.component.insertAdjacentElement("afterend", this.FooterBlock.component);
        this.FooterBlock.component.insertAdjacentElement("afterbegin", this.FooterBlockTitle.component);
        this.FooterBlockTitle.component.textContent = "On vacation";
        this.FooterBlock.component.insertAdjacentElement("beforeend", this.FooterBlockIcon.component);
        this.FooterBlock.component.insertAdjacentElement("beforeend", this.FooterBlockCount.component);
        this.FooterBlockCount.component.textContent = "15";
        this.FooterBlock.component.insertAdjacentElement("beforeend", this.FooterBlockCountPercent.component);
        this.FooterBlockCountPercent.component.textContent = "12%";
    }
}