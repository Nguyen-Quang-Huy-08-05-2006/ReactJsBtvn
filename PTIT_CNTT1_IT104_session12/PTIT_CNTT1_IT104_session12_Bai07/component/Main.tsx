import React from "react";
import Cart from "./Cart";

const Main: React.FC = () => {
  const carts = Array.from({ length: 16 }, (_, i) => `Cart ${i + 1}`);

  return (
    <main style={{ flex: 1, padding: "1rem" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px"
      }}>
        {carts.map((c, idx) => (
          <Cart key={idx} title={c} />
        ))}
      </div>
    </main>
  );
};

export default Main;
