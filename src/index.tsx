import Button from "./components/button/Button";
import Input from "./components/input/Input";
import ToolBar from "./components/toolbar/ToolBar";
import './styles/style.scss';
/** @tsx foo */

const foo = (
	<div className="cool">
		<p>Hello there!</p>
	</div>
)

class Application {
  /** root */
  element: HTMLElement;

  /** children */
  children?: HTMLElement;

  constructor(){
    this.element = document.createElement('div');
    this.createRootElement();
  }

  private createRootElement(){
    window.document.body.appendChild(this.element)
  }

  public set changeChildren(children: HTMLElement){
    this.children = children;
  }

  public render(){
    if(this.children){
      this.element.insertAdjacentElement('afterbegin', this.children)
    }
  }

  public addChildren(node: HTMLElement){
    if(this.children){
      this.children.insertAdjacentElement('afterbegin', node);
    }
  }
}


const app = new Application();

app.changeChildren = new ToolBar({
  elements: [
    new Button({text: 'Добавить ода',class: 'testBtn', onClick: ()=> {
      app.addChildren(new Input({
        placeholder: 'введите',
      }).node)
    }}).node,
    new Button({text: 'КНОПКА 2',class: 'testBtn', onClick: ()=> alert('2')}).node,
  ],
  tag: 'div',
  class: 'toolbar',
}).render();

app.render();

