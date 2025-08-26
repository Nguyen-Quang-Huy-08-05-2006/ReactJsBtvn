import React, { useState } from "react";

export default function Demo() {
  const [name, setName] = useState("Nguyen Van A");

  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
