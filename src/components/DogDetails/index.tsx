import React from 'react';

import Button from '../Button';
import { Container, DogInformation, Avatar, Name, Likes } from  './styles';

import DogModel from '../../model/Dog';


interface DogDetailsProps {
  dogData: DogModel;
}

const DogDetails = ({dogData}: DogDetailsProps) => {
  const dogLikes = dogData.likes === 1 ? '1 like' : `${dogData.likes} likes`;

  return (
    <Container>
      <Avatar src={dogData.imageUrl} alt={dogData.name} />
      <DogInformation>
        <Name>{dogData.name}</Name>
        <Likes>{dogLikes}</Likes>
      </DogInformation>
      <Button>Like</Button>
    </Container>
  );
};

export default DogDetails;
