import { ChangeEvent } from 'react';

export interface BaseInputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>)=> void;
  onClick?: ()=> void;
}
