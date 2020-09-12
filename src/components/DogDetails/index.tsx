import React from 'react';

import {styled} from '../../config/stitches';

import Button from '../Button';

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
});

const Name = styled('span', {
  fontSize: '15px',
  fontWeight: 'bold',
});

const Likes = styled('span', {
  fontSize: '15px',
  opacity: '.5',
});

interface DogDetailsProps {
  dogData: {
    id: number | string;
    name: string;
    imageUrl: string;
    likes: number;
  };
}

const DogDetails = ({dogData}: DogDetailsProps) => {
  const dogList = dogData.likes === 1 ? '1 like' : `${dogData.likes} likes`;

  return (
    <Container>
      <Avatar src={dogData.imageUrl} alt={dogData.name} />
      <DogInformation>
        <Name>{dogData.name}</Name>
        <Likes>{dogList}</Likes>
      </DogInformation>
      <Button>Like</Button>
    </Container>
  );
};

export default DogDetails;
