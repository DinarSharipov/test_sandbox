import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  padding: 10px 20px;
  background-color: blueviolet;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  :hover{
    background-color: #892be2ac;
  }
  :active{
    background-color: blueviolet;
  }
`;

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: ()=> void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
}) => <ButtonComponent onClick={onClick}>{children}</ButtonComponent>;

export default Button;
