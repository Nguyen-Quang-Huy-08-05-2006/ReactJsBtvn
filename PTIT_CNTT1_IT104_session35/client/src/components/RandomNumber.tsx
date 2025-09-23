import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { generate } from "../features/randomSlice";
import { Button } from "antd";

const RandomNumber: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const number = useSelector((state: RootState) => state.random.number);

  return (
    <div>
      <h3>Number: {number}</h3>
      <Button onClick={() => dispatch(generate())}>Random</Button>
    </div>
  );
};

export default RandomNumber;
