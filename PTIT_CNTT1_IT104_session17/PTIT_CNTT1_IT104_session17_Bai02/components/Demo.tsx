import React, { useState } from "react";

export default function Demo() {
  const [product, setProduct] = useState({
    id: 1,
    name: "Cocacola",
    price: 10000,
    quantity: 10,
  });

  return (
    <div>
      <p>{product.name}</p>
    </div>
  );
}
