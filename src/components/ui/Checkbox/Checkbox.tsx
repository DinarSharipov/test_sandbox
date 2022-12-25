import React from 'react';
import { CheckBoxProps } from './types';

const Checkbox: React.FC<CheckBoxProps> = ({
  checked,
  onChange,
}) => (
  <input
    checked={checked}
    onChange={() => onChange && onChange()}
    type="checkbox"
  />
);

export default React.memo(Checkbox);
