import React from 'react';

import {styled} from '../../config/stitches';

const StyledHeader = styled('header', {
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '36px',
  opacity: '0.9',
  marginBottom: '40px',
});

const Header = () => {
  return <StyledHeader>Doggy</StyledHeader>;
};

export default Header;
