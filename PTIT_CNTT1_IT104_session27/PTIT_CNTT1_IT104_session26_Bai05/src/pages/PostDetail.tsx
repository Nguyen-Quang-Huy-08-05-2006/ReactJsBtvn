import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h2>Bài viết không tồn tại</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/blog/posts">← Quay lại danh sách</Link>
    </div>
  );
}
