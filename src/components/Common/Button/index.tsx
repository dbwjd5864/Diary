import React from 'react';
import { ButtonBase } from './styles';

interface ButtonProp {
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  backgroundColor?: string;
}

const Button = ({
  type = 'button',
  onClick,
  children,
  backgroundColor,
  ...props
}: ButtonProp) => {
  return (
    <ButtonBase
      backgroundColor={backgroundColor}
      onClick={onClick}
      type={type}
      {...props}>
      {children}
    </ButtonBase>
  );
};

export default Button;
