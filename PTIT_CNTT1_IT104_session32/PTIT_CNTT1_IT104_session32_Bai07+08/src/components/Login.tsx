import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";

const Login: React.FC = () => {
  const registeredUser = useSelector((state: RootState) => state.auth.user);
  const dispatch: AppDispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (registeredUser) {
      setEmail(registeredUser.email);
      setPassword(registeredUser.password);
    }
  }, [registeredUser]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "LOGIN", payload: { email, password } });
    alert("Đăng nhập thành công!");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
