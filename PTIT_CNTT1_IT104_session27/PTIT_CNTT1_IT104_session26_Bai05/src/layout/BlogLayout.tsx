import { Link, Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "200px",
          background: "linear-gradient(to bottom, #4f46e5, #3b82f6)",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>My Blog</h2>
        <nav>
          <ul>
            <li>
              <Link to="/blog/posts" style={{ color: "white" }}>
                Posts
              </Link>
            </li>
          </ul>
        </nav>
        <footer
          style={{ position: "absolute", bottom: "10px", fontSize: "12px" }}
        >
          © 2025 My Blog
        </footer>
      </aside>

      <main style={{ flex: 1, padding: "20px", background: "#f9fafb" }}>
        <Outlet />
      </main>
    </div>
  );
}
