import { BaseComponentProps } from './BaseComponentTypes';

class BaseComponent {
  id?: string;

  class?: string;

  tag?: string;

  element: HTMLElement;

  children?: HTMLElement[];

  constructor(data: BaseComponentProps) {
    this.element = document.createElement(data.tag || 'div');
    this.element.className = data.class || this.element.className;
    this.element.id = data.id || this.element.id;
    this.renderChild();
  }

  private renderChild() {
    if (this.children) {
      this.children.forEach((child) => {
        this.element.appendChild(child);
      });
    }
  }

  public get node() {
    return this.element;
  }
}

export default BaseComponent;
