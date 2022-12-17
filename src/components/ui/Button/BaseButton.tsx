import React from 'react';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  className,
  children,
}) => (
  <button
    className={className}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default React.memo(Button);
