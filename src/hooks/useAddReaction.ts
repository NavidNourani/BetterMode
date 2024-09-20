import ADD_REACTION from '@/graphql/mutations/addReaction';
import { Post } from '@/types/gql/post';
import { ReactionMapType } from '@/types/reactions';
import { useApolloClient, useMutation } from '@apollo/client';
interface Props {
  postId: string;
  reactionType: ReactionMapType;
}
export const useAddReaction = () => {
  const client = useApolloClient();
  const [addReaction] = useMutation(ADD_REACTION);

  const handleAddReaction = ({ postId, reactionType }: Props) => {
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
                'participants({"limit":10})': {
                  __typename: 'PaginatedPostReactionParticipant',
                  nodes: [],
                },
              },
            ];
          }

          return updatedReactions.filter(r => r.count > 0) as any;
        },
        reactionsCount(existingCount: number, { readField }) {
          const existingReactions = readField('reactions') as Post['reactions'];
          const userAlreadyReacted = existingReactions.some(r => r.reacted);
          return userAlreadyReacted ? existingCount : existingCount + 1;
        },
      },
    });
  };

  return { handleAddReaction };
};
