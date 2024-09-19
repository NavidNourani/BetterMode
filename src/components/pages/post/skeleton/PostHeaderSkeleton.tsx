const PostHeaderSkeleton = () => {
  return (
    <div className="flex flex-row gap-3 items-center">
      <div className="w-14 h-14 bg-gray-700 rounded-full animate-pulse" />
      <div className="flex flex-col gap-2">
        <div className="h-4 w-48 bg-gray-700 animate-pulse rounded" />
        <div className="h-4 w-24 bg-gray-700 animate-pulse rounded" />
      </div>
    </div>
  );
};

export default PostHeaderSkeleton;
