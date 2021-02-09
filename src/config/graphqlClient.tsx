import {
  createClient,
  Provider,
  dedupExchange,
  fetchExchange,
  cacheExchange,
} from 'urql';
import {devtoolsExchange} from '@urql/devtools';

const client = createClient({
  url: 'http://localhost:4000/graphql',
  exchanges: [devtoolsExchange, dedupExchange, cacheExchange, fetchExchange],
});

export {client, Provider};
