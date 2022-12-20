import React from 'react';
import { InputProps } from './types';

/** Поле ввода */
const Input: React.FC<InputProps> = ({
  readOnly,
  value,
  required,
  classes,
  label,
  placeholder,
  id,
}) => (
  <div>
    {label && <label htmlFor={id}>{label}</label>}
    <input
      className={classes}
      id={id}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      type="text"
      value={value}
    />
  </div>
);

export default Input;
