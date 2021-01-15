import React from 'react';
import {reset} from 'stitches-reset';
import { addDecorator } from '@storybook/react';
import {css} from '../src/config/stitches';
import {client, Provider} from '../src/config/graphqlClient';

css.global({
  ...reset,
  body: {...reset.body, fontFamily: "'Space Mono', monospace"},
});

addDecorator((storyFn) => (
  <Provider value={client}>{storyFn()}</Provider>
));
