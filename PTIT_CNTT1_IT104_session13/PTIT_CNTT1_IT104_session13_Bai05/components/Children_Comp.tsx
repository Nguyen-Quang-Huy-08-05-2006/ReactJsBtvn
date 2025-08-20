import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  product: Product;
};

function Children_Comp({ product }: Props) {
  return (
    <div>
      <h2>Thông tin sản phẩm (component con)</h2>
      <p><b>ID:</b> {product.id}</p>
      <p><b>Tên sản phẩm:</b> {product.name}</p>
      <p><b>Giá:</b> {product.price} VND</p>
      <p><b>Số lượng:</b> {product.quantity}</p>
    </div>
  );
}

export default Children_Comp;
