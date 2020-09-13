import React, {useState, ChangeEvent} from 'react';

import Button from '../Button';

import {FormGoup, Label, Input, Form} from './styles';

const DogForm = () => {
  const [dogData, setDogData] = useState({
    name: '',
    imageUrl: '',
  });

  const updateDogData = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.id);
    setDogData({
      ...dogData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <Form>
      <FormGoup>
        <Label>Name</Label>
        <Input
          type="text"
          id="name"
          value={dogData.name}
          onChange={updateDogData}
        />
      </FormGoup>
      <FormGoup>
        <Label>Image URL</Label>
        <Input
          type="text"
          id="imageUrl"
          value={dogData.imageUrl}
          onChange={updateDogData}
        />
      </FormGoup>
      <Button>Add</Button>
    </Form>
  );
};

export default DogForm;
