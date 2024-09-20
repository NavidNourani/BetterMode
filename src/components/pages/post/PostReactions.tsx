import Reactions from '@/components/pages/post/post-reactions/Reactions';
import ADD_REACTION from '@/graphql/mutations/addReaction';
import { GetPostResponse, Post } from '@/types/gql/post';
import { ReactionMapType } from '@/types/reactions';
import { useApolloClient, useMutation } from '@apollo/client';
import React from 'react';

interface PostReactionsProps {
  postId: string;
  reactions: GetPostResponse['post']['reactions'];
  allowedReactions: ReactionMapType[];
}

const PostReactions: React.FC<PostReactionsProps> = ({ postId, reactions, allowedReactions }) => {
  const client = useApolloClient();
  const [addReaction] = useMutation(ADD_REACTION);

  const handleReactionClick = (reactionType: ReactionMapType) => {
    addReaction({
      variables: {
        input: {
          overrideSingleChoiceReactions: true,
          reaction: reactionType,
        },
        postId,
      },
    });

    client.cache.modify({
      id: client.cache.identify({ __typename: 'Post', id: postId }),
      fields: {
        reactions(existingReactions: Post['reactions'] = []) {
          const existingReaction = existingReactions.find(r => r.reaction === reactionType);
          let updatedReactions;

          if (existingReaction) {
            updatedReactions = existingReactions.map(reaction => {
              if (reaction.reaction === reactionType && !reaction.reacted) {
                return { ...reaction, count: reaction.count + 1, reacted: true };
              }
              if (reaction.reacted && reaction.reaction !== reactionType) {
                return { ...reaction, count: reaction.count - 1, reacted: false };
              }
              return reaction;
            });
          } else {
            updatedReactions = [
              ...existingReactions.map(r =>
                r.reacted ? { ...r, count: r.count - 1, reacted: false } : r
              ),
              {
                __typename: 'PostReactionDetail',
                reaction: reactionType,
                count: 1,
                reacted: true,
                participants: { nodes: [] },
              },
            ];
          }

          return updatedReactions.filter(r => r.count > 0) as any;
        },
      },
    });
  };

  return (
    <Reactions
      allowedReactions={allowedReactions}
      reactions={reactions}
      handleReactionClick={handleReactionClick}
      addReactionLoading={false}
      userReactionType={reactions?.find(reaction => reaction.reacted)?.reaction as ReactionMapType}
    />
  );
};

export default PostReactions;
