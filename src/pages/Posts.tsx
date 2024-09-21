import Post from '@/components/pages/posts/Post';
import PostSkeleton from '@/components/pages/posts/PostSkeleton';
import Button from '@/components/shared/Button';
import { GET_POSTS } from '@/graphql/queries/getPosts';
import useAuth from '@/hooks/useAuth';
import { GetPostsResponse } from '@/types/gql/posts';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';

export default function Posts() {
  const { token } = useAuth();
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  const { data, loading, error, fetchMore } = useQuery<GetPostsResponse>(GET_POSTS, {
    variables: { limit: postsPerPage, offset: 0 },
    skip: !token,
  });

  if (error) return <p>Error: {error.message}</p>;

  const loadMore = () => {
    setLoadingMore(true);
    fetchMore({
      variables: {
        offset: page * postsPerPage,
        limit: postsPerPage,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        setLoadingMore(false);
        if (!fetchMoreResult) return prev;
        return {
          posts: {
            ...fetchMoreResult.posts,
            nodes: [...prev.posts.nodes, ...fetchMoreResult.posts.nodes],
          },
        };
      },
    });
    setPage(page + 1);
  };

  return (
    <div className="flex flex-col gap-3">
      <h1>Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {loading && new Array(postsPerPage).fill(1).map((_, index) => <PostSkeleton key={index} />)}
        {data && data.posts && data.posts.nodes.map(post => <Post node={post} key={post.id} />)}
      </div>
      {data?.posts.pageInfo.hasNextPage && (
        <Button
          onClick={loadMore}
          disabled={loadingMore}
          className="mt-4 self-center w-1/2 text-center flex items-center justify-center"
        >
          {loadingMore ? <CgSpinner className="animate-spin" size={18} /> : 'Load more'}
        </Button>
      )}
    </div>
  );
}
