import React, { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>{value}</p>
    </div>
  );
}
