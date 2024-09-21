import { FC } from 'react';
import { FaRegCalendarAlt, FaRegCommentDots, FaRegHeart } from 'react-icons/fa';

const PostSkeleton: FC = () => {
  return (
    <div className="animate-pulse">
      <article className="flex flex-col gap-2 relative rounded-md overflow-hidden h-full bg-background-light-300 dark:bg-background-dark-700">
        <div className="w-full aspect-[3/2] bg-gray-300 dark:bg-gray-700" />
        <main className="p-4 flex flex-col gap-3 flex-1">
          <p className="flex items-center text-sm font-medium gap-2">
            <FaRegCalendarAlt />
            <span className="bg-gray-300 dark:bg-gray-700 h-4 w-20 rounded"></span>
          </p>
          <h3 className="font-bold text-xl line-clamp-1 bg-gray-300 dark:bg-gray-700 h-6 w-3/4 rounded"></h3>
          <p className="text-sm line-clamp-4 flex-1 bg-gray-300 dark:bg-gray-700 h-16 rounded"></p>

          <footer className="flex flex-row gap-4">
            <p className="flex items-center text-base font-medium gap-2">
              <FaRegHeart />
              <span className="bg-gray-300 dark:bg-gray-700 h-4 w-8 rounded"></span>
            </p>
            <p className="flex items-center text-base font-medium gap-2">
              <FaRegCommentDots />
              <span className="bg-gray-300 dark:bg-gray-700 h-4 w-8 rounded"></span>
            </p>
          </footer>
        </main>
      </article>
    </div>
  );
};

export default PostSkeleton;
