import React from 'react';

interface InputProps {
  value?: string;
  classes?: string;
  required?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  label?: string;
  id?: string;

}

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
