import React, { useRef } from "react";

const ScrollToSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#2196f3",
          color: "white",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1>Cuộn tới nội dung</h1>
        <button
          onClick={scrollToSection}
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "white",
            color: "#2196f3",
            fontWeight: "bold",
          }}
        >
          Đi tới phần nội dung
        </button>
      </div>

      <div style={{ padding: "20px", lineHeight: "2" }}>
        <p>Đây là nội dung giả lập để tạo khoảng cách cho trang...</p>
        <p>Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài.</p>
        <p>Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.</p>
      </div>

      <div
        ref={sectionRef}
        style={{
          padding: "100px 20px",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h2>Đây là phần mục tiêu</h2>
        <p>Khi bấm nút, trang sẽ cuộn tới đây.</p>
      </div>
    </div>
  );
};

export default ScrollToSection;
