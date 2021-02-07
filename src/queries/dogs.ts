import gql from 'graphql-tag';

const QUERY_DOGS = gql`
  {
    dogs {
      id
      name
      imageUrl
      likes
    }
  }
`;

export {QUERY_DOGS};
