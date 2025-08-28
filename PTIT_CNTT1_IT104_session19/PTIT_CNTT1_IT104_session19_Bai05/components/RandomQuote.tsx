import React, { useState } from "react";

const RandomQuote: React.FC = () => {
  const quotes: string[] = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.",
  ];

  const [quote, setQuote] = useState<string>("Nhấn để lấy câu nói");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Random Quote</h2>
      <p style={{ fontStyle: "italic", fontSize: "18px", minHeight: "40px" }}>
        "{quote}"
      </p>
      <button
        onClick={getRandomQuote}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          cursor: "pointer",
          border: "none",
          borderRadius: "6px",
          background: "#007bff",
          color: "white",
          fontSize: "16px",
        }}
      >
        Lấy câu nói mới
      </button>
    </div>
  );
};

export default RandomQuote;
