import React, { useState } from "react";

export default function CounText() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const charCount = text.length;

  return (
    <div>
      <h2>Đếm ký tự & từ</h2>
      <textarea value={text} onChange={handleChange} />
      <div>
        <p>Số ký tự: {charCount}</p>
      </div>
    </div>
  );
}
