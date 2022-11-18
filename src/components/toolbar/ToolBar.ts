import BaseComponent from "../BaseComponent/BaseComponent";
import Button from "../button/Button";
import { ToolbarProps } from "./toolbarTypes";

class ToolBar extends BaseComponent {

  /** Элементы */
  elements: HTMLElement[];

  constructor(data: ToolbarProps){
    super({
      class: data.class,
      elements: data.elements,
      id: data.id,
      tag: data.tag
    });
    this.elements = data.elements;
  }

  public render(){
    if(this.elements){
      this.elements.forEach(elem=> this.element?.insertAdjacentElement('beforeend', elem));
    }
    return this.element
  }
}

export default ToolBar