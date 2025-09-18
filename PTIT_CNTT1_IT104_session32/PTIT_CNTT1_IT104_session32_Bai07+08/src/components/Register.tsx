import React, { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "REGISTER", payload: { email, password } });
    navigate("/login");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Đăng ký</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Nhập email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Nhập mật khẩu..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default Register;
