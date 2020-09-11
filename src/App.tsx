import React from 'react';
import {reset} from 'stitches-reset';

import {css} from './config/stitches';

css.global(reset);

function App() {
  return <div className="App">Doggy</div>;
}

export default App;
