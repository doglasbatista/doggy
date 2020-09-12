import React from 'react';

import DogDetails from '../DogDetails';

const dogs = [
  {
    id: 1,
    name: 'Caramel',
    imageUrl:
      'https://www.hypeness.com.br/wp-content/uploads/2019/09/Vira-lata_Caramelo_1.jpg',
    likes: 1,
  },
  {
    id: 2,
    name: 'Pingo',
    imageUrl:
      'https://www.petlove.com.br/images/breeds/192401/profile/original/srd-p.jpg?1532539578',
    likes: 0,
  },
];

const DogList = () => {
  return (
    <div>
    {dogs.map(dog => (
      <DogDetails dogData={dog} key={dog.id} />
    ))}
    </div>
  )
};

export default DogList;
