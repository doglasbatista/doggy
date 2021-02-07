import React from 'react';
import {useQuery} from 'urql';

import DogModel from '../../model/Dog';
import {QUERY_DOGS} from '../../queries/dogs';

import {styled} from '../../config/stitches';

const StyledHeader = styled('header', {
  height: '50px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  marginBottom: '40px',
});

const ApplicationTitle = styled('h1', {
  fontSize: '36px',
});

const DogsCount = styled('span', {
  fontSize: '14px',
});

const Header = () => {
  const [{data, fetching}] = useQuery<{dogs: DogModel[]}>({
    query: QUERY_DOGS,
  });

  const countText =
    data?.dogs.length === 1 ? '1 dog' : `${data?.dogs.length} dogs`;

  return (
    <StyledHeader>
      <ApplicationTitle>Doggy</ApplicationTitle>
      <DogsCount>{fetching ? 'Loading...' : countText}</DogsCount>
    </StyledHeader>
  );
};

export default Header;
