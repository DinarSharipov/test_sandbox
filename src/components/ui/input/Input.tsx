import React from 'react';
import { Input as InputContainer } from './InputStyle';
import { BaseInputProps } from './types';

/** Базовый компонент поля ввода */
const Input: React.FC<BaseInputProps> = (props) => (
  <InputContainer {...props} />
);

export default React.memo(Input);
