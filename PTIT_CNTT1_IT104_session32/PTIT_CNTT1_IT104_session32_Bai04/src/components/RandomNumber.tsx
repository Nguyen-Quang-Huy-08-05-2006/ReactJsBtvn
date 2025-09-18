import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store";

const RandomNumber: React.FC = () => {
  const numbers = useSelector((state: RootState) => state.random.numbers);
  const dispatch: AppDispatch = useDispatch();

  const handleGenerate = () => {
    const randomNum = Math.floor(Math.random() * 100);
    dispatch({ type: "ADD_RANDOM_NUMBER", payload: randomNum });
  };

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h2>Random Number Generator</h2>
      <p>[{numbers.join(", ")}]</p>
      <button onClick={handleGenerate}>Generate Random Number</button>
    </div>
  );
};

export default RandomNumber;
