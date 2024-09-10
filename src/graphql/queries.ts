import { gql } from '@apollo/client';

export const GET_GUEST_TOKEN = gql`
  query tokens($networkDomain: String!) {
    tokens(networkDomain: $networkDomain) {
      accessToken
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
