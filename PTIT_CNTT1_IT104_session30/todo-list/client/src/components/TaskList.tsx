import React from "react";
import { List } from "antd";
import { Todo } from "../types";
import TaskItem from "./TaskItem";

interface Props {
  todos: Todo[];
  onToggle: (id: number, completed: boolean) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  onUpdate: (id: number, title: string) => Promise<boolean>;
  existingTitles: string[];
}

const TaskList: React.FC<Props> = ({ todos, onToggle, onDelete, onUpdate, existingTitles }) => {
  return (
    <div style={{ maxHeight: 300, overflowY: "auto", marginBottom: 12 }}>
      <List
        bordered
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item key={todo.id}>
            <TaskItem
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onUpdate={onUpdate}
              existingTitles={existingTitles}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TaskList;
