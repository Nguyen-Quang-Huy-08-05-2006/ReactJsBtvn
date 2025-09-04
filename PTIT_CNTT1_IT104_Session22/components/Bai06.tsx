import React from "react";
import { Spin, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Bai06() {
  return (
    <div>
      <Space direction="vertical" size="large">
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 36, color: "#1677ff" }} spin />
          }
        />
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 36, color: "#8c8c8c" }} spin />
          }
        />
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 36, color: "#52c41a" }} spin />
          }
        />
      </Space>
    </div>
  );
}
