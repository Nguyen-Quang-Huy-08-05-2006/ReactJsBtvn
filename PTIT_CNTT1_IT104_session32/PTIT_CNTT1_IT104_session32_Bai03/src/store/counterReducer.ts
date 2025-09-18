interface CounterState {
  value: number;
}

type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" };

const initialState: CounterState = {
  value: 0,
};

function counterReducer(
  state: CounterState = initialState,
  action: Action
): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

export default counterReducer;
export type { CounterState, Action };
