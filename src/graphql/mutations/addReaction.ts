import { gql } from '@apollo/client';

const ADD_REACTION = gql`
  mutation addReaction($input: AddReactionInput!, $postId: ID!) {
    addReaction(input: $input, postId: $postId) {
      status
    }
  }
`;

export default ADD_REACTION;
