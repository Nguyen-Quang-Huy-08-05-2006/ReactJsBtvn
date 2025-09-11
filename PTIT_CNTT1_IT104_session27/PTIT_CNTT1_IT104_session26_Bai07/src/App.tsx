import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Trang Chủ</h1>
      <nav className="mt-4">
        <Link to="/about" className="mr-4 text-blue-500">
          About
        </Link>
        <Link to="/abcxyz" className="text-blue-500">
          Đi tới URL sai
        </Link>
      </nav>
    </div>
  );
}

function About() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Giới thiệu</h1>
      <p>Đây là trang About.</p>
      <Link to="/" className="text-blue-500">
        Về trang chủ
      </Link>
    </div>
  );
}

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold text-red-600">
        Trang bạn tìm không tồn tại.
      </h1>
      <div className="mt-4 space-x-4">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Quay về trang chủ
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Quay lại
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
