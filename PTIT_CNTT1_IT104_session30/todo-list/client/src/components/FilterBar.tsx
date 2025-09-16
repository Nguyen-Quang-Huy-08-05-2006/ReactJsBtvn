import React from "react";
import { Button, Space } from "antd";

type Filter = "all" | "completed" | "active";

interface Props {
  filter: Filter;
  setFilter: (f: Filter) => void;
}

const FilterBar: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <Space style={{ marginBottom: 12 }}>
      <Button type={filter === "all" ? "primary" : "default"} onClick={() => setFilter("all")}>Tất cả</Button>
      <Button type={filter === "completed" ? "primary" : "default"} onClick={() => setFilter("completed")}>Hoàn thành</Button>
      <Button type={filter === "active" ? "primary" : "default"} onClick={() => setFilter("active")}>Đang thực hiện</Button>
    </Space>
  );
};

export default FilterBar;
