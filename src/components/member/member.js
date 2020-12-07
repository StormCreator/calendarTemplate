import { Component } from "../component";

export class Member extends Component {
    constructor(parentSelector,tagName,className,member) {
        super(parentSelector,tagName,className,);
        this.member = member;
    }  

}