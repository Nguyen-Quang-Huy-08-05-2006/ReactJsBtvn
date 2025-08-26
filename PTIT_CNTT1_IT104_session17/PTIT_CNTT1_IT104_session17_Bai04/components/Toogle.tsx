import React, { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleTitle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isVisible && <h1>Tiêu đề văn bản</h1>}

      <button onClick={toggleTitle}>
        {isVisible ? "Ẩn tiêu đề" : "Hiện tiêu đề"}
      </button>
    </div>
  );
}
