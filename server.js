const {ApolloServer, gql} = require('apollo-server');
const {v4} = require('uuid');

const typeDefs = gql`
  type Query {
    dogs: [Dog]
  }

  type Mutation {
    dogs(name: String, imageUrl: String): Dog
    likeDog(id: ID): Dog
  }

  type Dog {
    id: ID
    name: String
    imageUrl: String
    likes: Int
  }
`;

let dogs = [
  {
    id: v4(),
    name: 'Caramel',
    imageUrl: 'https://fotos.amomeupet.org/uploads/fotos/0x800_1568662224_5d7fe2d09bccd.jpeg',
    likes: 0,
  },
  {
    id: v4(),
    name: 'Pingo',
    imageUrl:
      'https://www.petlove.com.br/images/breeds/192401/profile/original/srd-p.jpg?1532539578',
    likes: 0,
  },
];

const Query = {
  dogs: async () => {
    return await new Promise(resolve => setTimeout(() => resolve(dogs), 1000));
  },
};

const Mutation = {
  dogs: (_, {name, imageUrl}) => {
    const dog = {
      id: v4(),
      name,
      imageUrl,
      likes: 0,
    };

    dogs.push(dog);

    return dog;
  },

  likeDog: async (_, {id}) => {
    return await new Promise(resolve => {
      setTimeout(() => {
        const dogIndex = dogs.findIndex(dog => dog.id === id);
        let dog = dogs[dogIndex];

        dog = {...dog, likes: dog.likes + 1};

        dogs = [...dogs.slice(0, dogIndex), dog, ...dogs.slice(dogIndex + 1)];

        resolve(dog);
      }, 1000);
    });
  },
};

const resolvers = {
  Query,
  Mutation,
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
