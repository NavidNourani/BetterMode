import { ApolloProvider, useQuery } from '@apollo/client';
import { client } from '@graphql/apollo-client';
import { GET_POSTS } from '@graphql/queries';

export async function getServerSideProps() {
  // Fetch data on the server
  const { data } = await client.query({ query: GET_POSTS });
  return { props: { initialData: data } };
}

function Posts({ initialData }: { initialData: any }) {
  const { data, loading, error } = useQuery(GET_POSTS, {
    initialData,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      {/* Render posts */}
      {data && data.posts && data.posts.map((post: any) => <div key={post.id}>{post.title}</div>)}
    </div>
  );
}

const PostsWithApollo = ({ initialData }: { initialData: any }) => (
  <ApolloProvider client={client}>
    <Posts initialData={initialData} />
  </ApolloProvider>
);

export default PostsWithApollo;
