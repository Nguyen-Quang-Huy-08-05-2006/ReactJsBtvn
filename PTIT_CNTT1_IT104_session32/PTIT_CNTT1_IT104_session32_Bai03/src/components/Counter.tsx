import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store";

const Counter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Counter</h2>
      <p>Giá trị hiện tại: {counter}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Tăng</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Giảm</button>
    </div>
  );
};

export default Counter;
