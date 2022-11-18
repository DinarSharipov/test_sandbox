import { ButtonProps } from "../components/button/ButtonTypes";
import { Component } from "../types";


const Component = (tag: keyof HTMLElementTagNameMap, children?: HTMLElement[]): Component<HTMLElement>=> {
  const element = document.createElement(tag);

  if(children?.length){
    children.forEach(el=> {
        
      element.insertAdjacentElement('beforeend', el)
    });
  }


  return {
    element,
    children,
  };
}

export default Component;