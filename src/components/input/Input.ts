import BaseComponent from "../BaseComponent/BaseComponent";
import { InputProps } from "./InputTypes";

class Input extends BaseComponent {
  placeholder?: string;
  onChange?: (value?: string)=> void;
  value?: string;
  onBlur?: (value?: string)=> void;
  onClick?: ()=> void;

  constructor(data: InputProps){
    super({
      class: data.class,
      element: data.element,
      elements: data.elements,
      id: data.id,
      tag: data.tag || 'input'
    });
    this.element.setAttribute('placeholder', this.placeholder || '');
    this.onChange = data.onChange;
    this.value = data.value;
    this.onBlur = data.onBlur;
    this.onClick = data.onClick;
  }
}

export default Input