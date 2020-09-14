import React from 'react';
import {useQuery} from 'urql';

import DogDetails from '../DogDetails';
import Button from '../Button';

import DogModel from '../../model/Dog';

import {LoadDogs} from './styles';

const DogList = () => {
  const [{data, fetching}, getDogs] = useQuery<{dogs: DogModel[]}>({
    query: `{
      dogs {
        id,
        name
        imageUrl
        likes
      }
    }`,
    // pause: true,
  });

  return (
    <div>
      {!data && (
        <LoadDogs>
          {fetching ? (
            <span>Loading...</span>
          ) : (
            <Button onClick={getDogs}>Get Dogs </Button>
          )}
        </LoadDogs>
      )}
      {data?.dogs?.map((dog: DogModel) => (
        <DogDetails dogData={dog} key={dog.id} />
      ))}
    </div>
  );
};

export default DogList;
