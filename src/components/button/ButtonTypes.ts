import { BaseComponentProps } from "../BaseComponent/BaseComponentTypes";

export interface ButtonProps extends BaseComponentProps {
  text: string;
  onClick: ()=> void;
}