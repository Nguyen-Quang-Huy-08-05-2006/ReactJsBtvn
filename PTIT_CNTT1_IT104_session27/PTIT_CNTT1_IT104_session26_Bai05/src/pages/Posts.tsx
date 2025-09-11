import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Posts() {
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            background: "white",
          }}
        >
          <h2>
            <Link to={`/blog/posts/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
