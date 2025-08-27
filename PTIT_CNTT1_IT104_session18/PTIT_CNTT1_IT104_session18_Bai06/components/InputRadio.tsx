import React, { useReducer } from "react";

const initialState = {
  gender: "male",
};

function reducer(
  state: typeof initialState,
  action: { type: string; payload?: string }
) {
  switch (action.type) {
    case "SET_GENDER":
      return { ...state, gender: action.payload || "male" };
    default:
      return state;
  }
}

export default function InputRadio() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4 flex flex-col gap-3">
      <h2 className="text-xl font-bold">Chọn giới tính</h2>

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={state.gender === "male"}
          onChange={(e) =>
            dispatch({ type: "SET_GENDER", payload: e.target.value })
          }
        />
        Nam
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={state.gender === "female"}
          onChange={(e) =>
            dispatch({ type: "SET_GENDER", payload: e.target.value })
          }
        />
        Nữ
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={state.gender === "other"}
          onChange={(e) =>
            dispatch({ type: "SET_GENDER", payload: e.target.value })
          }
        />
        Khác
      </label>

      <p>
        Giới tính đã chọn: <span>{state.gender}</span>
      </p>
    </div>
  );
}
