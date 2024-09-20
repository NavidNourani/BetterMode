import IconButton from '@/components/shared/IconButton';
import { Post } from '@/types/gql/post';
import { ReactionMap, ReactionMapType } from '@/types/reactions';
import ReactionButton from './reactions/ReactionButton';

interface Props {
  allowedReactions?: Post['allowedReactions'];
  reactions?: Post['reactions'];
  handleReactionClick: (reaction: ReactionMapType) => void;
  addReactionLoading: boolean;
  userReactionType: ReactionMapType;
}
const Reactions = ({ reactions, allowedReactions, handleReactionClick }: Props) => {
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
        <div className="flex flex-row gap-2 items-center">
          <IconButton
            key={reaction.reaction}
            disabled
            icon={ReactionMap[reaction.reaction as ReactionMapType]}
          />
          <p className="text-lg">{reaction.count}</p>
        </div>
      ))}
    </div>
  );
};

export default Reactions;
