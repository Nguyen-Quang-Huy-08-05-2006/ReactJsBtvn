import React from "react";
import { Dropdown, Button, MenuProps } from "antd";

export default function Bai04() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Cài đặt",
    },
    {
      key: "2",
      label: "Đổi mật khẩu",
    },
    {
      key: "3",
      label: "Đăng xuất",
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button>Nguyễn Văn Nam</Button>
      </Dropdown>
    </div>
  );
}
