import IconButton from '@/components/shared/IconButton';
import { Post } from '@/types/gql/post';
import { Reaction, ReactionMap } from '@/types/reactions';
import ReactionButton from './reactions/ReactionButton';

interface Props {
  allowedReactions?: Post['allowedReactions'];
  reactions?: Post['reactions'];
  handleReactionClick: (reaction: Reaction) => void;
  addReactionLoading: boolean;
  userReactionType: Reaction;
}
const Reactions = ({ reactions, allowedReactions, handleReactionClick }: Props) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      {allowedReactions && (
        <ReactionButton
          loading={false} //addReactionLoading}
          userReactionType={reactions?.find(reaction => reaction.reacted)?.reaction as Reaction}
          onClick={handleReactionClick}
          allowedReactions={allowedReactions as Reaction[]}
        />
      )}
      {reactions?.map(reaction => (
        <div className="flex flex-row gap-2 items-center">
          <IconButton
            key={reaction.reaction}
            disabled
            icon={ReactionMap[reaction.reaction as Reaction]}
          />
          <p className="text-lg">{reaction.count}</p>
        </div>
      ))}
    </div>
  );
};

export default Reactions;
