export interface BaseComponentProps {
  id?: string;
  class?: string;
  tag?: keyof HTMLElementTagNameMap;
  element?: HTMLElement;
  elements?: HTMLElement[];

}
