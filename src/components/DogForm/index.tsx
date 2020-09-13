import React from 'react';

import Button from '../Button';

import {FormGoup, Label, Input, Form} from './styles';

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
