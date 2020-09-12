import React from 'react';
import {reset} from 'stitches-reset';

import DogForm from './components/DogForm';
import DogList from './components/DogList';
import Header from './components/Header';

import {css, styled} from './config/stitches';

console.log(reset);

css.global({
  ...reset,
  body: {...reset.body, fontFamily: "'Space Mono', monospace"},
});

const Container = styled('div', {
  width: '90%',
  maxWidth: '900px',
  margin: '0 auto',
});

function App() {
  return (
    <Container>
      <Header />
      <DogForm />
      <DogList />
    </Container>
  );
}

export default App;
