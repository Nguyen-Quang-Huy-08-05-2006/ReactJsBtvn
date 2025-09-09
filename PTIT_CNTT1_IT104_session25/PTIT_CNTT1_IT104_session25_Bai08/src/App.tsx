import { Routes, Route } from "react-router-dom";
import ListUser from "./components/UserList";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListUser />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default App;
