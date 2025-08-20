import React from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type Props = {
  post: Post;
};

function DetailPost({ post }: Props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p><b>Id:</b> {post.id}</p>
      <p><b>Title:</b> {post.title}</p>
      <p><b>Content:</b> {post.content}</p>
      <p><b>Author:</b> {post.author}</p>
      <hr />
    </div>
  );
}

export default DetailPost;
