import React, { useState } from "react";

export default function ChangeColor() {
  const [color, setColor] = useState("black");

  const changeTextColor = () => {
    setColor(color === "black" ? "red" : "black");
  };

  return (
    <div>
      <h2 style={{ color: color }}>Tiêu đề văn bản</h2>
      <button onClick={changeTextColor}>Đổi màu chữ</button>
    </div>
  );
}
