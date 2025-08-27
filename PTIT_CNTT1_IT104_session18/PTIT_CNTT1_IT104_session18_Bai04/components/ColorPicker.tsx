import React, { useState, useCallback } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#000000");

  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );

  return (
    <div>
      <h2>Color Picker</h2>

      <input type="color" value={color} onChange={handleChangeColor} />
      <div style={{ backgroundColor: color }} />

      <p>
        Màu đã chọn: <span className="font-bold">{color}</span>
      </p>
    </div>
  );
}
