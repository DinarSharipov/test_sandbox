import { BaseComponentProps } from "./BaseComponentTypes";

class BaseComponent {
  id?: string;
  class?: string;
  tag?: string;
  element: HTMLElement;
  children?: HTMLElement[];

  constructor(data: BaseComponentProps){
    this.element = document.createElement(data.tag || 'div');
    this.element.className = data.class || this.element.className;
    this.element.id = data.id || this.element.id;
  }

  public get node(){
    return this.element
  }
}

export default BaseComponent;