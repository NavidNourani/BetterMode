import { Reaction, ReactionMap } from '@/types/reactions';
import { FC, useEffect, useRef, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import IconButton from '../../shared/IconButton';

interface ReactionButtonProps {
  userReactionType?: Reaction;
  allowedReactions: Reaction[];
  loading: boolean;
  onClick: (reactionType: Reaction) => void;
}

const ReactionButton: FC<ReactionButtonProps> = ({
  userReactionType,
  onClick,
  allowedReactions,
  loading,
}) => {
  const [openReactions, setOpenReactions] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenReactions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleReactionClick = (reactionType: Reaction) => {
    if (userReactionType === reactionType) {
      return;
    }
    setOpenReactions(false);
    onClick(reactionType);
  };

  return (
    <>
      <div className="relative">
        <IconButton
          disabled={loading}
          className={`text-2xl ${userReactionType ? '!bg-gray-900' : ''}`}
          icon={userReactionType ? ReactionMap[userReactionType] : <FaRegHeart />}
          onClick={() => setOpenReactions(!openReactions)}
        />
        {openReactions && (
          <div
            ref={menuRef}
            className="flex flex-row border border-gray-500 gap-4 text-3xl px-4 py-2 bg-gray-700 rounded-full w-fit absolute -translate-y-full -top-1 -left-5"
          >
            {allowedReactions.map((item) => (
              <IconButton
                disabled={loading}
                key={item}
                icon={ReactionMap[item]}
                onClick={() => handleReactionClick(item)}
                className={userReactionType === item ? '!bg-gray-900' : 'bg-transparent'}
                variant={'gray'}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ReactionButton;
