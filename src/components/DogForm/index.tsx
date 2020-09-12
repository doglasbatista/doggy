import React from 'react';
import {styled} from '../../config/stitches';

import Button from '../Button';

const FormGoup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '12px',
});

const Label = styled('label', {
  color: '#000000',
  opacity: '0.3',
  marginBottom: '4px',
});

const Input = styled('input', {
  border: 'none',
  borderRadius: '3px',
  padding: '12px',
  backgroundColor: '#F3F3F3',
});

const Form = styled('form', {
  marginBottom: '40px',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '12px',
  Button: {
    gridColumn: '1 / span 2',
    height: '40px',
  },
});

const DogForm = () => {
  return (
    <Form>
      <FormGoup>
        <Label>Name</Label>
        <Input type="text" />
      </FormGoup>
      <FormGoup>
        <Label>Image URL</Label>
        <Input type="text" />
      </FormGoup>
      <Button>Add</Button>
    </Form>
  );
};

export default DogForm;
