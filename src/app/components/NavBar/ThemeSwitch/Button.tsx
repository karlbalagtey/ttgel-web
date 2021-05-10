import React from 'react';
import { ButtonWrap } from './styles';

interface ButtonProps {
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <ButtonWrap onClick={onClick}>{children}</ButtonWrap>;
};
