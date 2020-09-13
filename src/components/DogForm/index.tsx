import React, {useState, ChangeEvent, FormEvent} from 'react';
import gql from 'graphql-tag';
import {useMutation} from 'urql';

import Button from '../Button';

import {FormGoup, Label, Input, Form} from './styles';

const CREATE_DOG = gql`
  mutation createDog($name: String!, $imageUrl: String!) {
    dogs(name: $name, imageUrl: $imageUrl) {
      id
      name
      imageUrl
      likes
    }
  }
`;

const DogForm = () => {
  const [_, createDog] = useMutation(CREATE_DOG);
  const [dogData, setDogData] = useState({
    name: '',
    imageUrl: '',
  });

  const updateDogData = (event: ChangeEvent<HTMLInputElement>) => {
    setDogData({
      ...dogData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {name, imageUrl} = dogData;

    await createDog({name, imageUrl});

    setDogData({name: '', imageUrl: ''});
  };

  return (
    <Form onSubmit={handleSubmit}>
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
