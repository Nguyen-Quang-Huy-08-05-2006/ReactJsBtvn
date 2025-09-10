import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setIsLogIn }: LoginProps) => {
  const navigate = useNavigate();

  // user mặc định
  const user = {
    email: "admin@gmail.com",
    password: "123456",
    role: "Admin",
  };

  // state form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  // handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.email === user.email &&
      formData.password === user.password &&
      formData.role === user.role
    ) {
      setIsLogIn(true);
      navigate("/account");
    } else {
      alert("Thông tin đăng nhập không chính xác!");
    }
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Nhập email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "8px",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Nhập mật khẩu"
          value={formData.password}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "8px",
          }}
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={{
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "8px",
          }}
        >
          <option value="">-- Chọn quyền --</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "8px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
