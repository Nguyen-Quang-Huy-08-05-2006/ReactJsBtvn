import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setActive } from "../features/menuSlice";
import { Menu } from "antd";

const MenuApp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const active = useSelector((state: RootState) => state.menu.active);

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[active]}
      onClick={(e) => dispatch(setActive(e.key))}
      items={[
        { key: "home", label: "Home" },
        { key: "about", label: "About" },
        { key: "contact", label: "Contact" },
      ]}
    />
  );
};

export default MenuApp;
