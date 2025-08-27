import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state: typeof initialState, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export default function Increase() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Giá trị: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
    </div>
  );
}
