export interface Component<T extends HTMLElement> {
  element: T;
  children?: HTMLElement[];
}
