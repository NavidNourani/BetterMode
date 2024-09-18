import ReactionButton from '@/components/shared/ReactionButton';
import ADD_REACTION from '@/graphql/mutations/addReaction';
import GET_POST from '@/graphql/queries/getPost';
import { GetPostResponse } from '@/types/gql/post';
import { Reaction } from '@/types/reactions';
import { formatTimeAgo } from '@/utils/dateFormat';
import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const client = useApolloClient();
  const { data, loading, error } = useQuery<GetPostResponse>(GET_POST, {
    variables: {
      id,
    },
  });
  const [addReaction] = useMutation(ADD_REACTION);

  const handleReactionClick = (reactionType: Reaction) => {
    addReaction({
      variables: {
        input: {
          overrideSingleChoiceReactions: true,
          reaction: reactionType,
        },
        postId: id,
      },
      onCompleted: () => {},
    });
    const cache = client.readQuery<GetPostResponse>({
      query: GET_POST,
      variables: {
        id,
      },
    });
    if (cache?.post) {
      let updatedReactions: typeof cache.post.reactions = [];
      if (cache.post.reactions.find((reaction) => reaction.reaction === reactionType)) {
        updatedReactions = cache.post.reactions.map((reaction) => {
          if (reactionType === reaction.reaction) {
            if (!reaction.reacted) {
              return {
                ...reaction,
                count: reaction.count + 1,
                reacted: true,
              };
            }
            return reaction;
          }
          if (reaction.reacted) {
            return {
              ...reaction,
              count: reaction.count - 1,
              reacted: false,
            };
          }
          return reaction;
        });
      } else {
        const filteredReactions = cache.post.reactions.map((reaction) => {
          if (reaction.reacted) {
            return {
              ...reaction,
              count: reaction.count - 1,
              reacted: false,
            };
          }
          return reaction;
        });
        updatedReactions = [
          ...filteredReactions,
          { reaction: reactionType, count: 1, reacted: true, participants: { nodes: [] } },
        ];
      }
      client.writeQuery({
        query: GET_POST,
        data: {
          post: {
            ...cache.post,
            reactions: updatedReactions,
          },
        },
        variables: { id },
      });
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="flex flex-col gap-6 bg-background-light-200 dark:bg-background-dark-800 p-6 rounded-lg">
      <div className="flex flex-row gap-3 items-center">
        <img
          src={data?.post?.owner?.member?.profilePicture?.url}
          alt="Profile"
          className="rounded-full overflow-hidden w-14 h-14"
        />
        <div className="flex flex-col gap-2">
          <h3>{data?.post?.owner?.member?.name}</h3>
          <p>{formatTimeAgo(data?.post?.createdAt)}</p>
        </div>
      </div>
      <h1>{data?.post?.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
          __html: data?.post?.fields
            .find((field) => field.key === 'content')
            ?.value.replace(/^"|"$/g, '')!,
        }}
      />
      {data?.post?.allowedReactions && (
        <ReactionButton
          loading={false} //addReactionLoading}
          userReactionType={
            data?.post?.reactions?.find((reaction) => reaction.reacted)?.reaction as Reaction
          }
          onClick={handleReactionClick}
          allowedReactions={data.post.allowedReactions as Reaction[]}
        />
      )}
    </div>
  );
};

export default Post;
