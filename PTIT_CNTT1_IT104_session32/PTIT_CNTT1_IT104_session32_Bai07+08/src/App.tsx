import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

const App: React.FC = () => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  React.useEffect(() => {
    if (isAuthenticated && user) {
      console.log("Đã đăng nhập:", user.email);
    }
  }, [isAuthenticated, user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
