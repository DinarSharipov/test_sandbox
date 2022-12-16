import React from 'react';

interface InputProps {
  value?: string;
  classes?: string;
  required?: boolean;
  readOnly?: boolean;

}

const Input: React.FC<InputProps> = ({
  readOnly,
  value,
  required,
  classes,
}) => (
  <input
    className={classes}
    readOnly={readOnly}
    required={required}
    type="text"
    value={value}
  />
);

export default Input;
