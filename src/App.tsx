import React from 'react';
import {reset} from 'stitches-reset';

import DogList from './components/DogList';

import {css, styled} from './config/stitches';

css.global(reset);

const Container = styled('div', {
  width: '90%',
  maxWidth: '900px',
  margin: '40px auto 0',
});

function App() {
  return (
    <Container>
      <DogList />
    </Container>
  );
}

export default App;
