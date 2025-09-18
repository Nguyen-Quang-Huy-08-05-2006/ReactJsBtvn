import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store";

const ThemeSwitcher: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch: AppDispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const appStyle: React.CSSProperties = {
    height: "100vh",
    backgroundColor: darkMode ? "#222" : "#fff",
    color: darkMode ? "#f5f5f5" : "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleToggle} />{" "}
        Dark Mode
      </label>
    </div>
  );
};

export default ThemeSwitcher;
