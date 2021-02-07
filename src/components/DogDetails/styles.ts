import {styled} from '../../config/stitches';

const Container = styled('li', {
  display: 'grid',
  gridTemplateColumns: '60px auto 80px',
  alignItems: 'center',
  listStyleType: 'none',
  marginBottom: '40px',
});

const DogInformation = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const Avatar = styled('img', {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
});

const Name = styled('span', {
  fontSize: '15px',
  fontWeight: 'bold',
  marginBottom: '4px',
});

const Likes = styled('span', {
  fontSize: '15px',
  opacity: '.5',
});

export {Container, DogInformation, Avatar, Name, Likes};
