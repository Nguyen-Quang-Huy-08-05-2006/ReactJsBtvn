import React, { useMemo } from "react";

const ShoppingCart = () => {
  const cartItems = [
    { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
    { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
  ];

  const totalPrice = useMemo(() => {
    console.log("Tính lại tổng giá trị đơn hàng...");
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Giá: {item.price.toLocaleString()}đ x {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Tổng tiền: {totalPrice.toLocaleString()}đ</h3>
    </div>
  );
};

export default ShoppingCart;
