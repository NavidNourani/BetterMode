import { gql } from '@apollo/client';

export const LOGIN_NETWORK = gql`
  mutation LoginNetworkWithPassword($usernameOrEmail: String!, $password: String!) {
    loginNetwork(input: { usernameOrEmail: $usernameOrEmail, password: $password }) {
      accessToken
      refreshToken
      role {
        name
        scopes
      }
      member {
        id
        name
      }
    }
  }
`;
