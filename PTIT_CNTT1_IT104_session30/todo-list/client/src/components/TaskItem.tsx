import React, { useState } from "react";
import { Checkbox, Space, Button, Modal, Input, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Todo } from "../types";

interface Props {
  todo: Todo;
  onToggle: (id: number, completed: boolean) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  onUpdate: (id: number, title: string) => Promise<boolean>;
  existingTitles: string[];
}

const TaskItem: React.FC<Props> = ({ todo, onToggle, onDelete, onUpdate, existingTitles }) => {
  const [delOpen, setDelOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editVal, setEditVal] = useState(todo.title);
  const [editError, setEditError] = useState("");

  const confirmDelete = async () => {
    await onDelete(todo.id);
    setDelOpen(false);
  };

  const startEdit = () => {
    setEditVal(todo.title);
    setEditError("");
    setEditOpen(true);
  };

  const cancelEdit = () => {
    setEditOpen(false);
    setEditError("");
  };

  const validateEdit = (): boolean => {
    const v = editVal.trim();
    if (!v) {
      setEditError("Tên công việc không được để trống.");
      return false;
    }
    if (v.toLowerCase() !== todo.title.toLowerCase() &&
        existingTitles.some(t => t.toLowerCase() === v.toLowerCase())) {
      setEditError("Tên công việc không được phép trùng.");
      return false;
    }
    setEditError("");
    return true;
  };

  const submitEdit = async () => {
    if (!validateEdit()) return;
    const ok = await onUpdate(todo.id, editVal.trim());
    if (ok) setEditOpen(false);
  };

  return (
    <>
      <Space style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id, todo.completed)}>
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.title}</span>
        </Checkbox>
        <Space>
          <Button type="text" icon={<EditOutlined style={{ color: "#ffc107" }} />} onClick={startEdit} />
          <Button type="text" danger icon={<DeleteOutlined />} onClick={() => setDelOpen(true)} />
        </Space>
      </Space>

      <Modal
        title="Xác nhận xóa"
        open={delOpen}
        onOk={confirmDelete}
        onCancel={() => setDelOpen(false)}
        okText="Xóa"
        cancelText="Hủy"
        okButtonProps={{ danger: true }}
      >
        Bạn có chắc chắn muốn xóa công việc: <strong>{todo.title}</strong>?
      </Modal>

      <Modal
        title="Sửa công việc"
        open={editOpen}
        onOk={submitEdit}
        onCancel={cancelEdit}
        okText="Cập nhật"
        cancelText="Hủy"
      >
        <Input value={editVal} onChange={(e) => setEditVal(e.target.value)} onPressEnter={submitEdit} />
        {editError && <Typography.Text type="danger" style={{ display: "block", marginTop: 6 }}>{editError}</Typography.Text>}
      </Modal>
    </>
  );
};

export default TaskItem;
