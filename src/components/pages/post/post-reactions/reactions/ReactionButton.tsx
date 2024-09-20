import { ReactionMap, ReactionMapType } from '@/types/reactions';
import { FC, useEffect, useRef, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import IconButton from '../../../../shared/IconButton';

interface ReactionButtonProps {
  userReactionType?: ReactionMapType;
  allowedReactions: ReactionMapType[];
  loading?: boolean;
  className?: string;
  onClick: (reactionType: ReactionMapType) => void;
  size?: 'sm' | 'lg';
}

const ReactionButton: FC<ReactionButtonProps> = ({
  userReactionType,
  onClick,
  allowedReactions,
  loading,
  className,
  size = 'lg',
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

  const handleReactionClick = (reactionType: ReactionMapType) => {
    if (userReactionType === reactionType) {
      return;
    }
    setOpenReactions(false);
    onClick(reactionType);
  };

  return (
    <>
      <div
        className="relative"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <IconButton
          disabled={loading}
          className={`${size === 'lg' ? 'text-2xl' : 'text-base'} ${
            userReactionType ? '!bg-gray-900' : ''
          } ${className}`}
          icon={
            userReactionType ? (
              ReactionMap[userReactionType]
            ) : (
              <FaRegHeart size={size === 'lg' ? '28px' : '20px'} />
            )
          }
          onClick={() => setOpenReactions(!openReactions)}
        />
        {openReactions && (
          <div
            ref={menuRef}
            className={`flex flex-row border border-gray-500 gap-4 px-4 py-2 bg-gray-700 rounded-full w-fit absolute -translate-y-full top-0 ${
              size === 'lg' ? 'text-3xl' : 'text-xl'
            } ${size === 'lg' ? '-left-5' : 'left-0'}`}
          >
            {allowedReactions.map(item => (
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
