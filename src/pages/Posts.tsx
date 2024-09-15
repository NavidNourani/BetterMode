import Post from '@/components/Post';
import useAuth from '@/hooks/useAuth';
import { GetPostsResponse } from '@/types/gql/posts';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../graphql/queries';

export default function Posts() {
  const { token } = useAuth();
  const { data, loading, error } = useQuery<GetPostsResponse>(GET_POSTS, {
    variables: { limit: 10 },
    skip: !token,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col gap-3">
      <h1>Posts</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {data && data.posts && data.posts.nodes.map((post) => <Post node={post} key={post.id} />)}
      </div>
    </div>
  );
}
