interface RandomState {
  numbers: number[];
}

type Action = { type: "ADD_RANDOM_NUMBER"; payload: number };

const initialState: RandomState = {
  numbers: [],
};

function randomReducer(
  state: RandomState = initialState,
  action: Action
): RandomState {
  switch (action.type) {
    case "ADD_RANDOM_NUMBER":
      return { ...state, numbers: [...state.numbers, action.payload] };
    default:
      return state;
  }
}

export default randomReducer;
export type { RandomState, Action };
