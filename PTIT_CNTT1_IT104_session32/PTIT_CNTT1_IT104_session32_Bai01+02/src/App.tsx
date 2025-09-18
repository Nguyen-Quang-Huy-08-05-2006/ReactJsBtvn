import React from "react";
import Profile from "./components/Profile";
import ListUser from "./components/ListUser";

const App: React.FC = () => {
  return (
    <div>
      <h1>Quản lý User (Redux thường + TSX)</h1>
      <Profile />
      <ListUser />
    </div>
  );
};

export default App;
