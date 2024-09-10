import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: import.meta.env.VITE_BETTERMODE_API_URL,
  cache: new InMemoryCache(),
});
console.log(import.meta.env.VITE_BETTERMODE_API_URL);
