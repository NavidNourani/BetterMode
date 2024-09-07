import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { ENV } from './utils/env';

const httpLink = createHttpLink({
  uri: ENV.BETTERMODE_API_URL,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
