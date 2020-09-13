const {ApolloServer, gql} = require('apollo-server');
const {v4} = require('uuid');

const typeDefs = gql`
  type Query {
    dogs: [Dog]
  }

  type Mutation {
    dogs(name: String, imageUrl: String): Dog
  }

  type Dog {
    id: ID
    name: String
    imageUrl: String
    likes: Int
  }
`;

const dogs = [
  {
    id: v4(),
    name: 'Caramel',
    imageUrl:
      'https://www.hypeness.com.br/wp-content/uploads/2019/09/Vira-lata_Caramelo_1.jpg',
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
};

const resolvers = {
  Query: {
    dogs: () => dogs,
  },
  Mutation,
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
