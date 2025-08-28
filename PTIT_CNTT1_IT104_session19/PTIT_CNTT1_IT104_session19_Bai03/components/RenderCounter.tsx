import React, { useState, useRef, useEffect } from "react";

const RenderCounter: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Render Counter</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Nhập gì đó..."
      />
      <p>Giá trị nhập: {value}</p>
      <p>Số lần render: {renderCount.current}</p>
    </div>
  );
};

export default RenderCounter;
