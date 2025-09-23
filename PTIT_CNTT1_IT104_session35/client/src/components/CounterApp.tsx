import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { increment, decrement, reset } from "../features/counterSlice";
import { Button } from "antd";

const CounterApp: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h3>Counter: {value}</h3>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(reset())}>Reset</Button>
    </div>
  );
};

export default CounterApp;
