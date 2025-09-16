import React, { useRef, useState } from "react";
import { Input, Button, Space, Typography } from "antd";

interface Props {
  existingTitles: string[];
  onAdd: (title: string) => Promise<boolean>;
}

const TaskInput: React.FC<Props> = ({ existingTitles, onAdd }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const validate = (): boolean => {
    const v = value.trim();
    if (!v) {
      setError("Tên công việc không được để trống.");
      return false;
    }
    if (existingTitles.some(t => t.toLowerCase() === v.toLowerCase())) {
      setError("Tên công việc không được phép trùng.");
      return false;
    }
    setError("");
    return true;
  };

  const handleAdd = async () => {
    if (!validate()) return;
    const ok = await onAdd(value.trim());
    if (ok) {
      setValue("");
      inputRef.current?.focus();
    }
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <Space.Compact style={{ width: "100%" }}>
        <Input
          ref={node => (inputRef.current = node)}
          placeholder="Nhập tên công việc"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onPressEnter={handleAdd}
          status={error ? "error" : ""}
        />
        <Button type="primary" onClick={handleAdd}>
          Thêm công việc
        </Button>
      </Space.Compact>
      {error && (
        <Typography.Text type="danger" style={{ display: "block", marginTop: 6 }}>
          {error}
        </Typography.Text>
      )}
    </div>
  );
};

export default TaskInput;
