import React, { useState } from "react";

export default function Checkbox() {
  // State lưu danh sách sở thích đã chọn
  const [hobbies, setHobbies] = useState([]);

  // Danh sách các sở thích
  const options = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];

  // Xử lý khi tick checkbox
  const handleChange = (e) => {
    const value = e.target.value;
    // Nếu đã có trong mảng -> bỏ đi, ngược lại -> thêm vào
    if (hobbies.includes(value)) {
      setHobbies(hobbies.filter((item) => item !== value));
    } else {
      setHobbies([...hobbies, value]);
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <h3>Sở thích: {JSON.stringify(hobbies)}</h3>
      {options.map((opt, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={opt}
            checked={hobbies.includes(opt)}
            onChange={handleChange}
          />
          <label>{opt}</label>
        </div>
      ))}
    </div>
  );
}
