import PostContent from '@/components/pages/post/PostContent';
import PostHeader from '@/components/pages/post/PostHeader';
import PostReactions from '@/components/pages/post/PostReactions';
import PostContentSkeleton from '@/components/pages/post/skeleton/PostContentSkeleton';
import PostHeaderSkeleton from '@/components/pages/post/skeleton/PostHeaderSkeleton';
import GET_POST from '@/graphql/queries/getPost';
import { GetPostResponse } from '@/types/gql/post';
import { ReactionMapType } from '@/types/reactions';
import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

const Post: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery<GetPostResponse>(GET_POST, {
    variables: { id },
  });

  if (loading)
    return (
      <div className="flex flex-col gap-6 bg-background-light-200 dark:bg-background-dark-800 rounded-lg">
        <div className="w-full aspect-[4] bg-gray-700 animate-pulse rounded" />
        <div className="flex flex-col gap-6 p-6">
          <PostHeaderSkeleton />
          <PostContentSkeleton />
        </div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !id) return <div>No data</div>;
  return (
    <div className="flex flex-col gap-6 bg-background-light-200 dark:bg-background-dark-800 rounded-lg">
      <img
        className="w-full aspect-[4] object-cover"
        src={
          data.post.fields?.find(field => field.key === 'coverImage')?.relationEntities?.medias?.[0]
            ?.url
        }
      />
      <div className="flex flex-col gap-6 p-6">
        <PostHeader owner={data.post.owner} createdAt={data.post.createdAt} />
        <PostContent title={data.post.title} content={data.post.fields} />
        <PostReactions
          postId={id}
          reactions={data.post.reactions}
          allowedReactions={data.post.allowedReactions as ReactionMapType[]}
        />
      </div>
    </div>
  );
};

export default Post;
