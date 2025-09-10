import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";
import Account from "./pages/Account";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <Routes>
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
