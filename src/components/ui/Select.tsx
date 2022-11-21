import React from 'react';
import styled from 'styled-components';
import Flex from '../../flex/Flex';

const SelectWrapper = styled.select`
  height: 30px;
  width: 200px;
  background-color: darkcyan;
  border: none;
  border-radius: 4px;
  padding: 5px 5px;
  appearance:none;
  color: #ffffff;
  option{
    padding: 100px;
  }
`;

const Label = styled.label``;

const Option = styled.option`
  padding: 50px;
  text-indent: 5px;
`;

interface SelectProps {
  options?: {value: string; label: React.ReactNode}[];
  label?: string;
  defaultOption?: string;
  onChange: (value: string)=> void;
}

const Select: React.FC<SelectProps> = ({
  options,
  label,
  defaultOption,
  onChange,
}) => (
  <Flex.Column>
    <Label>{label}</Label>
    <SelectWrapper
      id="element"
      name="select"
      onChange={(e) => onChange(e.target.value)}
    >
      {
        options && (
          options.map((option) => (
            <Option
              key={option.value}
              selected={option.value === defaultOption}
              value={option.value}
            >
              {option.label}
            </Option>
          ))
        )
      }
    </SelectWrapper>
  </Flex.Column>
);

export default Select;
