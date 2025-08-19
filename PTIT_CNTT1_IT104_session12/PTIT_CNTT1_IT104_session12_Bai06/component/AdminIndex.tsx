import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";

const AdminIndex: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Menu />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default AdminIndex;
