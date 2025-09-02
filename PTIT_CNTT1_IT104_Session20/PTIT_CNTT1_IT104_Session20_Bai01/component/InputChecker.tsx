import React, { useState } from "react";

export default function InputChecker() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Nhập chuỗi..."
      />
      {value.length > 5 && (
        <p className="text-red-500 mt-2">Chuỗi nhập vào dài hơn 5 ký tự!</p>
      )}
    </div>
  );
}
