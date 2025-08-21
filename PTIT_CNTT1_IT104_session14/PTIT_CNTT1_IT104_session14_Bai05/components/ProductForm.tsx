import React, { Component, ChangeEvent, FormEvent } from "react";

interface Product {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
}

interface FormState {
  productCode: string;
  productName: string;
  price: string;
  quantity: string;
}

class ProductForm extends Component<{}, FormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      productCode: "",
      productName: "",
      price: "",
      quantity: "",
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<FormState, keyof FormState>);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const product: Product = {
      productCode: this.state.productCode,
      productName: this.state.productName,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity),
    };

    console.log(product);
  };

  render() {
    return (
      <div style={{ width: "400px", margin: "20px auto" }}>
        <h2>Thêm mới sản phẩm</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Mã sản phẩm</label>
            <input
              type="text"
              name="productCode"
              value={this.state.productCode}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label>Tên sản phẩm</label>
            <input
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label>Giá</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label>Số lượng</label>
            <select
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
              required
            >
              <option value="">--Chọn số lượng--</option>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>

          <button type="submit">Đăng ký</button>
        </form>
      </div>
    );
  }
}

export default ProductForm;
