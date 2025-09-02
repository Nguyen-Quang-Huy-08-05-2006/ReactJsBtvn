import React, { useReducer } from "react";

function formReducer(
  state: { name: string; email: string },
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

export default function UserForm() {
  const [state, dispatch] = useReducer(formReducer, { name: "", email: "" });

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>Thông tin người dùng</h2>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Tên:</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <strong>Hiển thị thông tin:</strong>
        <p>Tên: {state.name}</p>
        <p>Email: {state.email}</p>
      </div>
    </div>
  );
}
