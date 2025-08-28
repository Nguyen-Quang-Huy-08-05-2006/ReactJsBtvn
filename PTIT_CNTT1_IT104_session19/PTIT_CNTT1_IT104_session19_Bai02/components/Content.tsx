import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Content must be used within ThemeProvider");

  const { theme } = context;

  return (
    <main>
      <p>Đây là phần nội dung chính của ứng dụng.</p>
      <p>
        Theme hiện tại: <b>{theme.toUpperCase()}</b>
      </p>
    </main>
  );
};

export default Content;
