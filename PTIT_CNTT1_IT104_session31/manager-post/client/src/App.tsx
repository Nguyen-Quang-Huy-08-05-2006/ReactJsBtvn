import { Routes, Route, Navigate } from "react-router-dom";
import BlogInterface from "./pages/BlogInterface";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list-post" />} />

      <Route path="/list-post" element={<BlogInterface />} />

      <Route path="*" element={<h1>404 - Trang không tồn tại</h1>} />
    </Routes>
  );
}

export default App;
