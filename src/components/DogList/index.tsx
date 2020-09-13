import React, {useEffect} from 'react';
import {useQuery} from 'urql';

import DogDetails from '../DogDetails';

import DogModel from '../../model/Dog';

const DogList = () => {
  const [{data, fetching}] = useQuery({
    query: `{
      dogs {
        id,
        name
        imageUrl
        likes
      }
    }`,
  });

  if (fetching) return <div>Loading...</div>;

  return (
    <div>
      {data.dogs.map((dog: DogModel) => (
        <DogDetails dogData={dog} key={dog.id} />
      ))}
    </div>
  );
};

export default DogList;
