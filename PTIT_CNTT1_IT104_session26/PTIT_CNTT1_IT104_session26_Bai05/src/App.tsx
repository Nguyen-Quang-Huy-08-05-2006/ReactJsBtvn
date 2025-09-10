import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/LogIn";
import PrivateRouter from "./pages/PrivateRouter";
import Account from "./pages/Account";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login setIsLogIn={setIsLogIn} />} />
      <Route
        path="/account"
        element={
          <PrivateRouter isLogIn={isLogIn}>
            <Account />
          </PrivateRouter>
        }
      />
    </Routes>
  );
}

export default App;
