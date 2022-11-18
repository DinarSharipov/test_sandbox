import BaseComponent from '../BaseComponent/BaseComponent';
import { ButtonProps } from './ButtonTypes';

class Button extends BaseComponent {
  text: string;

  onClick: ()=> void | string;

  constructor(data: ButtonProps) {
    super({
      class: data.class,
      tag: data.tag || 'button',
    });
    this.text = data.text;
    this.onClick = data.onClick;
    this.element.textContent = this.text;
    this.element.addEventListener('click', this.onClick);
  }
}

export default Button;
