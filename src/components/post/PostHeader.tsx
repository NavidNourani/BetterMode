import { GetPostResponse } from '@/types/gql/post';
import { formatTimeAgo } from '@/utils/dateFormat';
import React from 'react';

interface PostHeaderProps {
  owner?: GetPostResponse['post']['owner'];
  createdAt?: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ owner, createdAt }) => {
  if (!owner) return null;
  return (
    <div className="flex flex-row gap-3 items-center">
      <img
        src={owner.member.profilePicture.url}
        alt="Profile"
        className="rounded-full overflow-hidden w-14 h-14"
      />
      <div className="flex flex-col gap-2">
        <h3>{owner.member.name}</h3>
        <p>{formatTimeAgo(createdAt)}</p>
      </div>
    </div>
  );
};

export default PostHeader;
