import React, { Component } from "react";
import Children_Comp from "./Children_Comp";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type StateType = {
  product: Product;
};

class Parent_Comp extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      product: {
        id: 101,
        name: "Laptop Dell Inspiron",
        price: 18000000,
        quantity: 5,
      },
    };
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Thông tin sản phẩm (component cha)</h2>
        <p><b>ID:</b> {this.state.product.id}</p>
        <p><b>Tên sản phẩm:</b> {this.state.product.name}</p>
        <p><b>Giá:</b> {this.state.product.price} VND</p>
        <p><b>Số lượng:</b> {this.state.product.quantity}</p>

        <hr />
        <Children_Comp product={this.state.product} />
      </div>
    );
  }
}

export default Parent_Comp;
