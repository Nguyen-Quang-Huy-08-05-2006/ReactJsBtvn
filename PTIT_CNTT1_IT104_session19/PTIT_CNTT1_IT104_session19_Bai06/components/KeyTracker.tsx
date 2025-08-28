import React, { useEffect, useState } from "react";

const KeyTracker: React.FC = () => {
  const [lastKey, setLastKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setLastKey(event.key.toUpperCase()); // hiển thị chữ hoa
    };

    window.addEventListener("keydown", handleKeyDown);

    // dọn dẹp listener khi component bị unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h2>Phím bạn vừa nhấn:</h2>
      <div
        style={{
          marginTop: "20px",
          padding: "20px 40px",
          border: "2px dashed #333",
          borderRadius: "8px",
          fontSize: "48px",
          fontWeight: "bold",
          minWidth: "120px",
          textAlign: "center",
        }}
      >
        {lastKey ? `[ ${lastKey} ]` : "Chưa có phím nào"}
      </div>
    </div>
  );
};

export default KeyTracker;
