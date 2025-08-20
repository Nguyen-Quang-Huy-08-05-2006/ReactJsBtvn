import React, { Component } from "react";

type User = {
  id: number;
  name: string;
  address: string;
};

type StateType = {
  users: User[];
};

class Exercise03 extends Component<Record<string, never>, StateType> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "Nguyễn Văn A", address: "Hà Đông, Hà Nội" },
        { id: 2, name: "Trần Thị B", address: "Thanh Xuân, Hà Nội" },
        { id: 3, name: "Lê Văn C", address: "Cầu Giấy, Hà Nội" },
      ],
    };
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Danh sách Users</h2>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Họ tên</th>
              <th>Địa chỉ</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Exercise03;
