import PostContent from '@/components/pages/post/PostContent';
import PostHeader from '@/components/pages/post/PostHeader';
import PostReactions from '@/components/pages/post/PostReactions';
import PostContentSkeleton from '@/components/pages/post/skeleton/PostContentSkeleton';
import PostHeaderSkeleton from '@/components/pages/post/skeleton/PostHeaderSkeleton';
import GET_POST from '@/graphql/queries/getPost';
import { GetPostResponse } from '@/types/gql/post';
import { Reaction } from '@/types/reactions';
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
      <div className="flex flex-col gap-6 bg-background-light-200 dark:bg-background-dark-800 p-6 rounded-lg">
        <PostHeaderSkeleton />
        <PostContentSkeleton />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !id) return <div>No data</div>;
  return (
    <div className="flex flex-col gap-6 bg-background-light-200 dark:bg-background-dark-800 p-6 rounded-lg">
      <PostHeader owner={data.post.owner} createdAt={data.post.createdAt} />
      <PostContent title={data.post.title} content={data.post.fields} />
      <PostReactions
        postId={id}
        reactions={data.post.reactions}
        allowedReactions={data.post.allowedReactions as Reaction[]}
      />
    </div>
  );
};

export default Post;
