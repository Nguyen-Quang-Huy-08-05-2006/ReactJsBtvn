import React, { useReducer } from "react";

function counterReducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Giá trị: {count}
      </h1>
      <button
        onClick={() => dispatch({ type: "INCREASE" })}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "green",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Tăng
      </button>
      <button
        onClick={() => dispatch({ type: "DECREASE" })}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "red",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Giảm
      </button>
    </div>
  );
}
