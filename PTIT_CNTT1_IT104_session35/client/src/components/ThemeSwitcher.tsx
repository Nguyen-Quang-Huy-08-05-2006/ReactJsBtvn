import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { toggleTheme } from "../features/themeSlice";
import { Button } from "antd";

const ThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dark = useSelector((state: RootState) => state.theme.dark);

  return (
    <Button onClick={() => dispatch(toggleTheme())}>
      {dark ? "Dark Mode" : "Light Mode"}
    </Button>
  );
};

export default ThemeSwitcher;
