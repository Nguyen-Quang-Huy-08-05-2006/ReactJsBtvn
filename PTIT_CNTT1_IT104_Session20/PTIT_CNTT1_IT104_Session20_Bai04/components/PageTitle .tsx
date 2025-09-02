import React, { useState, useEffect } from "react";

export default function PageTitle() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (username.trim() === "") {
      document.title = "Trang của bạn";
    } else {
      document.title = `Xin chào, ${username}!`;
    }
  }, [username]);

  return (
    <div>
      <h1>Nhập tên để đổi tiêu đề trang</h1>
      <input
        type="text"
        placeholder="Nhập tên của bạn..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}
