import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  X,
  Eye,
  Edit,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  Image,
  Search,
} from "lucide-react";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import "./style.css";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  status: "Đã xuất bản" | "Bản nháp" | "Ngừng xuất bản";
  views: number;
  likes: number;
  comments: number;
  content?: string;
}

const parseMarkdownSync = (markdown: string): string => {
  try {
    const processor = remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false });
    const result = processor.processSync(markdown || "");
    return String(result);
  } catch (error) {
    console.error("Error parsing markdown:", error);
    return `<pre>${markdown}</pre>`;
  }
};

const API_URL = "http://localhost:3000/posts";

const BlogInterface: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState(`# Tiêu đề bài viết

Nhập nội dung bài viết ở đây...

## Phần mới

- Item 1
- Item 2
- Item 3

**Bold text** và *italic text*`);
  const [newPostImage, setNewPostImage] = useState("");
  const [previewMode, setPreviewMode] = useState<"edit" | "preview" | "split">(
    "split"
  );

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [viewPost, setViewPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searching, setSearching] = useState(false);

  const fetchPosts = async (keyword: string = "") => {
    setLoading(true);
    setError(null);
    try {
      let res;
      if (keyword.trim()) {
        res = await axios.get<BlogPost[]>(
          `${API_URL}?title_like=${encodeURIComponent(keyword)}`
        );
      } else {
        res = await axios.get<BlogPost[]>(API_URL);
      }
      setPosts(res.data);
    } catch (err: any) {
      console.error("Fetch posts error:", err);
      setError("Không thể lấy dữ liệu từ server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const insertMarkdown = (syntax: string) => {
    setNewPostContent((prev) => prev + syntax);
  };

  const renderedContent = useMemo(() => {
    return parseMarkdownSync(newPostContent);
  }, [newPostContent]);

  const handleSubmitForm = async () => {
    if (
      !newPostTitle.trim() ||
      !newPostImage.trim() ||
      !newPostContent.trim()
    ) {
      setErrorMessage(
        "Tên bài viết, hình ảnh và nội dung không được để trống."
      );
      setIsErrorModalOpen(true);
      return;
    }

    if (
      posts.some((p) => p.title === newPostTitle && p.id !== editingPost?.id)
    ) {
      setErrorMessage("Tên bài viết đã tồn tại, vui lòng nhập tên khác.");
      setIsErrorModalOpen(true);
      return;
    }

    const payload: Partial<BlogPost> = {
      title: newPostTitle,
      content: newPostContent,
      image: newPostImage,
      date: new Date().toLocaleDateString("vi-VN"),
      status: "Đã xuất bản",
      views: editingPost ? editingPost.views : 0,
      likes: editingPost ? editingPost.likes : 0,
      comments: editingPost ? editingPost.comments : 0,
    };

    try {
      if (editingPost) {
        await axios.put(`${API_URL}/${editingPost.id}`, {
          ...editingPost,
          ...payload,
        });
      } else {
        await axios.post(API_URL, payload);
      }
      await fetchPosts();
      handleResetForm();
      setShowForm(false);
      setEditingPost(null);
    } catch (err) {
      console.error("Submit form error:", err);
      setErrorMessage("Có lỗi khi lưu dữ liệu.");
      setIsErrorModalOpen(true);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setNewPostTitle(post.title);
    setNewPostContent(post.content || "");
    setNewPostImage(post.image || "");
    setShowForm(true);
    setPreviewMode("edit");
  };

  const handleView = (post: BlogPost) => {
    setViewPost(post);
  };

  const handleDelete = async (id: number) => {
    const ok = window.confirm("Bạn có chắc muốn xóa bài viết này?");
    if (!ok) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Xóa thất bại.");
    }
  };

  const handleResetForm = () => {
    setEditingPost(null);
    setNewPostTitle("");
    setNewPostImage("");
    setNewPostContent(`# Tiêu đề bài viết

Nhập nội dung bài viết ở đây...

## Phần mới

- Item 1
- Item 2
- Item 3

**Bold text** và *italic text*`);
  };

  const handleSearch = async () => {
    setSearching(true);
    await fetchPosts(searchKeyword);
    setSearching(false);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <h1 className="title">Giao diện quản lý bài viết</h1>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => {
                handleResetForm();
                setShowForm(true);
              }}
              className="btn-primary"
            >
              Thêm một bài viết
            </button>
            <button onClick={() => fetchPosts()} className="btn-secondary">
              Refresh
            </button>
          </div>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button onClick={handleSearch} className="btn-info">
            <Search size={16} /> Tìm kiếm
          </button>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Lịch sử viết</h2>
          </div>

          <div className="table-wrapper">
            {loading || searching ? (
              <div style={{ padding: 16 }}>Đang tải dữ liệu...</div>
            ) : error ? (
              <div style={{ padding: 16, color: "red" }}>{error}</div>
            ) : posts.length === 0 ? (
              <div style={{ padding: 16 }}>Không có kết quả tìm kiếm</div>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tiêu đề</th>
                    <th>Hình ảnh</th>
                    <th>Ngày viết</th>
                    <th>Trạng thái</th>
                    <th>Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, index) => (
                    <tr key={post.id}>
                      <td>{index + 1}</td>
                      <td>{post.title}</td>
                      <td>
                        {post.image && post.image.startsWith("http") ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            style={{
                              width: 40,
                              height: 40,
                              objectFit: "cover",
                              borderRadius: 8,
                            }}
                          />
                        ) : (
                          <div className="avatar">{post.image || "📝"}</div>
                        )}
                      </td>
                      <td>{post.date}</td>
                      <td>
                        <span className="status">{post.status}</span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            onClick={() => handleEdit(post)}
                            className="btn-warning"
                          >
                            <Edit size={14} /> Sửa
                          </button>
                          <button
                            onClick={() => handleView(post)}
                            className="btn-info"
                          >
                            <Eye size={14} /> Xem
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="btn-danger"
                          >
                            Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {showForm && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>
                  {editingPost ? "Cập nhật bài viết" : "Thêm mới bài viết"}
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false);
                    handleResetForm();
                  }}
                  className="close-btn"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="modal-body">
                <div className="form-group">
                  <label>Tên bài viết</label>
                  <input
                    type="text"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    placeholder="Nhập tên bài viết..."
                  />
                </div>

                <div className="form-group">
                  <label>Hình ảnh (URL)</label>
                  <input
                    type="text"
                    value={newPostImage}
                    onChange={(e) => setNewPostImage(e.target.value)}
                    placeholder="Nhập link ảnh..."
                  />
                </div>

                <div className="form-group">
                  <label>Nội dung (Markdown)</label>

                  <div className="toolbar">
                    <button
                      onClick={() => setPreviewMode("edit")}
                      className={`toolbar-btn ${
                        previewMode === "edit" ? "active" : ""
                      }`}
                    >
                      <Edit size={14} /> Edit
                    </button>
                    <button
                      onClick={() => setPreviewMode("preview")}
                      className={`toolbar-btn ${
                        previewMode === "preview" ? "active" : ""
                      }`}
                    >
                      <Eye size={14} /> Preview
                    </button>
                    <button
                      onClick={() => setPreviewMode("split")}
                      className={`toolbar-btn ${
                        previewMode === "split" ? "active" : ""
                      }`}
                    >
                      Split
                    </button>
                  </div>

                  {previewMode === "split" && (
                    <div className="split-editor">
                      <div className="editor">
                        <textarea
                          value={newPostContent}
                          onChange={(e) => setNewPostContent(e.target.value)}
                        />
                      </div>
                      <div
                        className="preview"
                        dangerouslySetInnerHTML={{
                          __html: renderedContent,
                        }}
                      />
                    </div>
                  )}

                  {previewMode === "edit" && (
                    <textarea
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                    />
                  )}

                  {previewMode === "preview" && (
                    <div
                      className="preview"
                      dangerouslySetInnerHTML={{
                        __html: renderedContent,
                      }}
                    />
                  )}
                </div>

                <div className="form-footer">
                  <button
                    onClick={() => {
                      setShowForm(false);
                      handleResetForm();
                    }}
                    className="btn-secondary"
                  >
                    Hủy
                  </button>
                  <button onClick={handleSubmitForm} className="btn-primary">
                    {editingPost ? "Cập nhật" : "Xuất bản"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {viewPost && (
          <div className="modal">
            <div className="modal-content" style={{ maxWidth: 800 }}>
              <div className="modal-header">
                <h2>{viewPost.title}</h2>
                <button onClick={() => setViewPost(null)} className="close-btn">
                  <X size={24} />
                </button>
              </div>
              <div className="modal-body">
                <div style={{ marginBottom: 12, color: "#6b7280" }}>
                  {viewPost.date} • {viewPost.status}
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: parseMarkdownSync(viewPost.content || ""),
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {isErrorModalOpen && (
          <div className="modal">
            <div className="modal-content" style={{ maxWidth: 400 }}>
              <div className="modal-header">
                <h2>Cảnh báo</h2>
                <button
                  onClick={() => setIsErrorModalOpen(false)}
                  className="close-btn"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="modal-body">
                <p style={{ color: "red" }}>{errorMessage}</p>
              </div>
              <div className="form-footer">
                <button
                  onClick={() => setIsErrorModalOpen(false)}
                  className="btn-primary"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="footer">Tailwind CSS is working!</div>
      </div>
    </div>
  );
};

export default BlogInterface;
