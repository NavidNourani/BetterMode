import Reactions from '@/components/pages/post/Reactions';
import ADD_REACTION from '@/graphql/mutations/addReaction';
import GET_POST from '@/graphql/queries/getPost';
import { GetPostResponse } from '@/types/gql/post';
import { Reaction } from '@/types/reactions';
import { useApolloClient, useMutation } from '@apollo/client';
import React from 'react';

interface PostReactionsProps {
  postId: string;
  reactions: GetPostResponse['post']['reactions'];
  allowedReactions: Reaction[];
}

const PostReactions: React.FC<PostReactionsProps> = ({ postId, reactions, allowedReactions }) => {
  const client = useApolloClient();
  const [addReaction] = useMutation(ADD_REACTION);

  const handleReactionClick = (reactionType: Reaction) => {
    addReaction({
      variables: {
        input: {
          overrideSingleChoiceReactions: true,
          reaction: reactionType,
        },
        postId,
      },
      onCompleted: () => {},
    });
    const cache = client.readQuery<GetPostResponse>({
      query: GET_POST,
      variables: {
        id: postId,
      },
    });
    if (cache?.post) {
      let updatedReactions: typeof cache.post.reactions = [];
      if (cache.post.reactions.find(reaction => reaction.reaction === reactionType)) {
        updatedReactions = cache.post.reactions.map(reaction => {
          if (reactionType === reaction.reaction) {
            if (!reaction.reacted) {
              return {
                ...reaction,
                count: reaction.count + 1,
                reacted: true,
              };
            }
            return reaction;
          }
          if (reaction.reacted) {
            return {
              ...reaction,
              count: reaction.count - 1,
              reacted: false,
            };
          }
          return reaction;
        });
      } else {
        const filteredReactions = cache.post.reactions.map(reaction => {
          if (reaction.reacted) {
            return {
              ...reaction,
              count: reaction.count - 1,
              reacted: false,
            };
          }
          return reaction;
        });
        updatedReactions = [
          ...filteredReactions,
          { reaction: reactionType, count: 1, reacted: true, participants: { nodes: [] } },
        ];
      }
      const updatedFilteredReactions = updatedReactions.filter(reaction => reaction.count > 0);
      client.writeQuery({
        query: GET_POST,
        data: {
          post: {
            ...cache.post,
            reactions: updatedFilteredReactions,
          },
        },
        variables: { id: postId },
      });
    }
  };

  return (
    <Reactions
      allowedReactions={allowedReactions}
      reactions={reactions}
      handleReactionClick={handleReactionClick}
      addReactionLoading={false}
      userReactionType={reactions?.find(reaction => reaction.reacted)?.reaction as Reaction}
    />
  );
};

export default PostReactions;
