import React from 'react';
import { extractStyles } from '../../../services/utils';
import Button from './BaseButton';
import { ButtonProps } from './types';

const Primary: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  className,
  children,
}) => (
  <Button
    className={extractStyles(`
  ${className}
  bg-violet-400
  `)}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default React.memo(Primary);
