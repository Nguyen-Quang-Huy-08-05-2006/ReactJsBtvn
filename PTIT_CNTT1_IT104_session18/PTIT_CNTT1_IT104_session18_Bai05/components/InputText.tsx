import React, { useReducer } from "react";

const initialState = {
  text: "",
};

function reducer(
  state: typeof initialState,
  action: { type: string; payload?: string }
) {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, text: action.payload || "" };
    default:
      return state;
  }
}

export default function InputText() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Input Text</h2>
      <input
        type="text"
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "SET_TEXT", payload: e.target.value })
        }
      />
      <p>
        Chuỗi đã nhập: <span>{state.text}</span>
      </p>
    </div>
  );
}
