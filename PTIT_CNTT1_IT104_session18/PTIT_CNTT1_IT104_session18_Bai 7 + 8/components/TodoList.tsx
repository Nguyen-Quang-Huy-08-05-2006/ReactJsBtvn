import React, { useReducer, useEffect, useState } from "react";
import "./TodoList.css";

const getTodosFromStorage = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "SET_TODOS":
      return action.payload;
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedTodos = getTodosFromStorage();
    dispatch({ type: "SET_TODOS", payload: storedTodos });
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
      />
      <button onClick={handleAdd} className="todo-add-btn">
        Thêm
      </button>

      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span>{todo.text}</span>
          <button
            onClick={() => handleRemove(todo.id)}
            className="todo-remove-btn"
          >
            Xóa
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
