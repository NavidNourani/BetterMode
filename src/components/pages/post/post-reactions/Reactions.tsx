import IconButton from '@/components/shared/IconButton';
import { useAddReaction } from '@/hooks/useAddReaction';
import { GetPostResponse } from '@/types/gql/post';
import { ReactionMap, ReactionMapType } from '@/types/reactions';
import ReactionButton from './reactions/ReactionButton';

export interface ReactionsProps {
  postId: string;
  reactions: GetPostResponse['post']['reactions'];
  allowedReactions: ReactionMapType[];
}
const Reactions = ({ allowedReactions, postId, reactions }: ReactionsProps) => {
  const { handleAddReaction } = useAddReaction();
  const handleReactionClick = (reactionType: ReactionMapType) => {
    handleAddReaction({
      postId,
      reactionType,
    });
  };

  return (
    <div className="flex flex-row gap-4 items-center">
      {allowedReactions && (
        <ReactionButton
          loading={false} //addReactionLoading}
          userReactionType={
            reactions?.find(reaction => reaction.reacted)?.reaction as ReactionMapType
          }
          onClick={handleReactionClick}
          allowedReactions={allowedReactions as ReactionMapType[]}
        />
      )}
      {reactions?.map(reaction => (
        <div key={reaction.reaction} className="flex flex-row gap-2 items-center">
          <IconButton disabled icon={ReactionMap[reaction.reaction as ReactionMapType]} />
          <p className="text-lg">{reaction.count}</p>
        </div>
      ))}
    </div>
  );
};

export default Reactions;
