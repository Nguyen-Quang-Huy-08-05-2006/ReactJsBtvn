import React from "react";
import "./ColorBox.css";

interface ColorBoxProps {
  color: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  return (
    <div className="color-box-wrapper">
      <div className="color-box" style={{ backgroundColor: color }}>
        Box
      </div>
      <div className="color-label">{color}</div>
    </div>
  );
};

export default ColorBox;
