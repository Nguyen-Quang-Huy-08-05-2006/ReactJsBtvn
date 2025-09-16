import React, { useEffect, useState } from "react";
import { Typography, message, Space, Button, Spin, Modal } from "antd";
import api from "./api";
import { Todo } from "./types";
import TaskInput from "./components/TaskInput";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";

const { Title } = Typography;
type Filter = "all" | "completed" | "active";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const [allDoneModalVisible, setAllDoneModalVisible] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await api.get<Todo[]>("/todos");
      setTodos(res.data);
    } catch {
      message.error("Không thể tải dữ liệu!");
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title: string): Promise<boolean> => {
    try {
      setLoading(true);
      const res = await api.post<Todo>("/todos", { title, completed: false });
      setTodos(prev => [...prev, res.data]);
      message.success("Thêm công việc thành công!");
      return true;
    } catch {
      message.error("Lỗi khi thêm công việc!");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const toggleTodo = async (id: number, completed: boolean) => {
    try {
      setLoading(true);
      await api.patch(`/todos/${id}`, { completed: !completed });
      setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !completed } : t));
      setTimeout(() => checkAllDone(), 0);
    } catch {
      message.error("Không thể cập nhật công việc!");
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      setLoading(true);
      await api.delete(`/todos/${id}`);
      setTodos(prev => prev.filter(t => t.id !== id));
      message.success("Xóa thành công!");
    } catch {
      message.error("Không thể xóa công việc!");
    } finally {
      setLoading(false);
    }
  };

  const updateTodo = async (id: number, title: string): Promise<boolean> => {
    try {
      setLoading(true);
      const res = await api.patch<Todo>(`/todos/${id}`, { title });
      setTodos(prev => prev.map(t => t.id === id ? res.data : t));
      message.success("Cập nhật thành công!");
      return true;
    } catch {
      message.error("Không thể cập nhật!");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteCompleted = async () => {
    try {
      setLoading(true);
      const completed = todos.filter(t => t.completed);
      await Promise.all(completed.map(t => api.delete(`/todos/${t.id}`)));
      setTodos(prev => prev.filter(t => !t.completed));
      message.success("Đã xóa công việc hoàn thành!");
    } catch {
      message.error("Không thể xóa công việc hoàn thành!");
    } finally {
      setLoading(false);
    }
  };

  const deleteAll = async () => {
    try {
      setLoading(true);
      await Promise.all(todos.map(t => api.delete(`/todos/${t.id}`)));
      setTodos([]);
      message.success("Đã xóa tất cả!");
    } catch {
      message.error("Không thể xóa tất cả!");
    } finally {
      setLoading(false);
    }
  };

  const filtered = todos.filter(t => {
    if (filter === "completed") return t.completed;
    if (filter === "active") return !t.completed;
    return true;
  });

  const visibleTodos = filtered;

  const checkAllDone = () => {
    if (visibleTodos.length > 0 && visibleTodos.every(t => t.completed)) {
      setAllDoneModalVisible(true);
    }
  };

  const handleAllDoneOk = () => {
    setAllDoneModalVisible(false);
  };

  return (
    <Spin spinning={loading}>
      <div style={{ maxWidth: 520, margin: "40px auto", padding: 12 }}>
        <Title level={3} style={{ textAlign: "center" }}>Quản lý công việc</Title>

        <TaskInput existingTitles={todos.map(t => t.title)} onAdd={addTodo} />

        <FilterBar filter={filter} setFilter={setFilter} />

        <TaskList
          todos={visibleTodos.slice(0, 1000)}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
          existingTitles={todos.map(t => t.title)}
        />

        <Space style={{ marginTop: 12 }}>
          <Button danger onClick={deleteCompleted}>Xóa công việc hoàn thành</Button>
          <Button danger type="primary" onClick={deleteAll}>Xóa tất cả công việc</Button>
          <Button onClick={fetchTodos}>Tải lại</Button>
        </Space>

        <Modal
          title="Hoàn thành công việc"
          open={allDoneModalVisible}
          onOk={handleAllDoneOk}
          onCancel={() => setAllDoneModalVisible(false)}
          okText="OK"
        >
          Tất cả công việc đang được hiển thị đã được hoàn thành.
        </Modal>
      </div>
    </Spin>
  );
};

export default App;
