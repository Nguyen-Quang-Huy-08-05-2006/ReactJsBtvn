import React, { Component } from "react";

// Định nghĩa kiểu dữ liệu cho state
type StateType = {
  id: number;
  name: string;
  dob: string; // ngày sinh để dạng string (có thể định dạng YYYY-MM-DD hoặc dd/MM/yyyy)
  address: string;
};

class Exercise02 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    // Khởi tạo state
    this.state = {
      id: 1,
      name: "Nguyễn Văn A",
      dob: "2006-05-08",
      address: "Hà Đông, Hà Nội",
    };
  }

  render() {
    const { id, name, dob, address } = this.state;

    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Thông tin cá nhân</h2>
        <p><b>ID:</b> {id}</p>
        <p><b>Họ tên:</b> {name}</p>
        <p><b>Ngày sinh:</b> {dob}</p>
        <p><b>Địa chỉ:</b> {address}</p>
      </div>
    );
  }
}

export default Exercise02;
