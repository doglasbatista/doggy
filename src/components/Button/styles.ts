import {styled} from '../../config/stitches';

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

  ':disabled': {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    cursor: 'not-allowed',
  },
});

export {StyledButton};
