import React from 'react';
import gql from 'graphql-tag';
import {useMutation} from 'urql';

import Button from '../Button';
import {Container, DogInformation, Avatar, Name, Likes} from './styles';

import DogModel from '../../model/Dog';

interface DogDetailsProps {
  dogData: DogModel;
}

const LIKE_DOG = gql`
  mutation likeDog($id: ID) {
    likeDog(id: $id) {
      id
      name
      imageUrl
      likes
    }
  }
`;

const DogDetails = ({dogData}: DogDetailsProps) => {
  const [{fetching}, likeDog] = useMutation(LIKE_DOG);

  const dogLikes = dogData.likes === 1 ? '1 like' : `${dogData.likes} likes`;

  const handleClick = () => {
    const {id} = dogData;

    likeDog({id});
  };

  return (
    <Container>
      <Avatar src={dogData.imageUrl} alt={dogData.name} />
      <DogInformation>
        <Name>{dogData.name}</Name>
        <Likes>{dogLikes}</Likes>
      </DogInformation>
      <Button onClick={handleClick} disabled={fetching}>
        {fetching ? 'Loading...' : 'Like'}
      </Button>
    </Container>
  );
};

export default DogDetails;
