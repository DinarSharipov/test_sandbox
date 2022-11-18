import { BaseComponentProps } from "../BaseComponent/BaseComponentTypes";
import Button from "../button/Button";

export interface ToolbarProps extends BaseComponentProps {
  elements: HTMLElement[];
}