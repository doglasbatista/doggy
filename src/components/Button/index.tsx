import React, {ReactNode} from 'react';
import {styled} from '../../config/stitches';

interface ButtonProps {
  children: ReactNode;
}

const StyledButton = styled('button', {
  border: 'none',
  backgroundColor: '#000',
  color: '#fff',
  padding: '8px',
  borderRadius: '3px',
  cursor: 'pointer',
  transition: '.3s ease-in',

  ':hover': {
    backgroundColor: '#232121',
  },
});

const Button = ({children}: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
