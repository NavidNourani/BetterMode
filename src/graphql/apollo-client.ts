import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: import.meta.env.VITE_BETTERMODE_API_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            merge(_existing, incoming) {
              return incoming;
            },
          },
          post: {
            read(_, { args, toReference }) {
              return toReference({
                __typename: 'Post',
                id: args?.id,
              });
            },
          },
        },
      },
      Post: {
        fields: {
          reactions: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});
