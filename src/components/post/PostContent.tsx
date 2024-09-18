import React from 'react';

interface PostContentProps {
  title: string;
  content: Array<{ key: string; value: string }>;
}

const PostContent: React.FC<PostContentProps> = ({ title, content }) => {
  const postContent = content.find(field => field.key === 'content')?.value.replace(/^"|"$/g, '');

  return (
    <>
      <h1>{title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: postContent || '',
        }}
      />
    </>
  );
};

export default PostContent;
