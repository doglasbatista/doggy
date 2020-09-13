import React from 'react';
import {reset} from 'stitches-reset';

import DogForm from './components/DogForm';
import DogList from './components/DogList';
import Header from './components/Header';

import {Container} from './App.styles';

import {css} from './config/stitches';
import {client, Provider} from './config/graphqlClient';

css.global({
  ...reset,
  body: {...reset.body, fontFamily: "'Space Mono', monospace"},
});

function App() {
  return (
    <Provider value={client}>
      <Container>
        <Header />
        <DogForm />
        <DogList />
      </Container>
    </Provider>
  );
}

export default App;
