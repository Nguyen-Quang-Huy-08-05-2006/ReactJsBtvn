import React from "react";

interface CartProps {
  title: string;
}

const Cart: React.FC<CartProps> = ({ title }) => {
  return (
    <div style={{
      background: "white",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      textAlign: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h4>{title}</h4>
    </div>
  );
};

export default Cart;
