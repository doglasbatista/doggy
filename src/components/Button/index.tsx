import React, {ReactNode, ButtonHTMLAttributes} from 'react';

import {StyledButton} from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({children, ...props}: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
