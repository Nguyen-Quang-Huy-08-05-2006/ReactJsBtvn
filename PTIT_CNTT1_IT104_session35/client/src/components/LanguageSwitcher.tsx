import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { toggleLang } from "../features/languageSlice";
import { Button } from "antd";

const LanguageSwitcher: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const lang = useSelector((state: RootState) => state.language.lang);

  return (
    <div>
      <h3>{lang === "vi" ? "Xin chào" : "Hello"}</h3>
      <Button onClick={() => dispatch(toggleLang())}>
        {lang === "vi" ? "Đổi EN" : "Switch VI"}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
