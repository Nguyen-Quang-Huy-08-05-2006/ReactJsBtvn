import React, { useState } from "react";

export default function Checkbox() {
  const [hobbies, setHobbies] = useState([]);
  const options = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];

  const handleChange = (e) => {
    const value = e.target.value;
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
