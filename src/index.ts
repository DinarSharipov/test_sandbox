import './styles/style.scss';

class Application {
  element: HTMLElement;

  children?: HTMLElement;

  constructor() {
    this.element = document.createElement('div');
    this.createRootElement();
  }

  private createRootElement() {
    window.document.body.appendChild(this.element);
  }

  public set changeChildren(children: HTMLElement) {
    this.children = children;
  }

  public render() {
    if (this.children) {
      this.element.insertAdjacentElement('afterbegin', this.children);
    }
  }

  public addChildren(node: HTMLElement) {
    if (this.children) {
      this.children.insertAdjacentElement('afterbegin', node);
    }
  }
}

const app = new Application();

app.render();
