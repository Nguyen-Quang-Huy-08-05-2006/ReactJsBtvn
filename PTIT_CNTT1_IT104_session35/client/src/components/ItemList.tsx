import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const items = [1, 2, 3, 4];

const ItemList: React.FC = () => {
  const mode = useSelector((state: RootState) => state.view.mode);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: mode === "list" ? "column" : "row",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {items.map((item) => (
        <div
          key={item}
          style={{
            width: mode === "list" ? "200px" : "60px",
            height: "40px",
            background: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
