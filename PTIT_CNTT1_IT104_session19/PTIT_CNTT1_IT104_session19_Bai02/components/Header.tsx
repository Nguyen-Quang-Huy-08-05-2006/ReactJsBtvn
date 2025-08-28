import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Header must be used within ThemeProvider");

  const { theme, toggleTheme } = context;

  return (
    <header>
      <h1>My Themed App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>
        Theme hiện tại: <b>{theme.toUpperCase()}</b>
      </p>
    </header>
  );
};

export default Header;
