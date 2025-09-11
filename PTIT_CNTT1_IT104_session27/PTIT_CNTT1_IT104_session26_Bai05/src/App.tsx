import { Routes, Route, Navigate } from "react-router-dom";
import BlogLayout from "./layout/BlogLayout";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/blog/posts" />} />

      <Route path="/blog" element={<BlogLayout />}>
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  );
}
