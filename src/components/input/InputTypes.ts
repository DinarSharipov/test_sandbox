import { BaseComponentProps } from "../BaseComponent/BaseComponentTypes";

export interface InputProps extends BaseComponentProps {
  label?: string;
  placeholder?: string;
  onChange?: (value?: string)=> void;
  value?: string;
  onBlur?: (value?: string)=> void;
  onClick?: ()=> void;
}