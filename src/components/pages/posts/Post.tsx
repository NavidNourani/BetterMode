import { useAddReaction } from '@/hooks/useAddReaction';
import { Post as PostType } from '@/types/gql/post';
import { ReactionMapType } from '@/types/reactions';
import { formatTimeAgo } from '@/utils/dateFormat';
import { FC, useMemo } from 'react';
import { FaRegCalendarAlt, FaRegCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactionButton from '../post/post-reactions/reactions/ReactionButton';

interface PostProps {
  node: PostType;
}

const Post: FC<PostProps> = ({ node }) => {
  const { handleAddReaction } = useAddReaction();
  const handleReactionClick = (reactionType: ReactionMapType) => {
    handleAddReaction({
      postId: node.id,
      reactionType,
    });
  };
  const coverImage = useMemo(() => {
    return node.fields.find(field => field.key === 'coverImage')?.relationEntities?.medias?.[0]
      ?.url;
  }, [node]);

  return (
    <Link to={`/posts/${node.id}/${node.slug}`}>
      <article className="flex flex-col gap-2 relative rounded-md overflow-hidden h-full bg-background-light-300 dark:bg-background-dark-700">
        <img src={coverImage} className="w-full aspect-[3/2] object-cover" />
        <main className="p-4 flex flex-col gap-3 flex-1">
          <p className="flex items-center text-sm font-medium gap-2">
            <FaRegCalendarAlt />
            {formatTimeAgo(node.createdAt)}
          </p>
          <h3 className="font-bold text-xl line-clamp-1">{node.title}</h3>
          <p className="text-sm line-clamp-4 flex-1">{node.description}</p>

          <footer className="flex flex-row gap-4">
            <div className="flex flex-row gap-2">
              <ReactionButton
                size="sm"
                userReactionType={
                  node.reactions?.find(reaction => reaction.reacted)?.reaction as ReactionMapType
                }
                onClick={handleReactionClick}
                allowedReactions={node.allowedReactions as ReactionMapType[]}
              />
              <p className="flex items-center text-base font-medium gap-2">{node.reactionsCount}</p>
            </div>
            <p className="flex items-center text-base font-medium gap-2">
              <FaRegCommentDots />
              {node.repliesCount}
            </p>
          </footer>
        </main>
      </article>
    </Link>
  );
};

export default Post;
