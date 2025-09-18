interface User {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

type Action =
  | { type: "REGISTER"; payload: User }
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

function authReducer(state = initialState, action: Action): AuthState {
  switch (action.type) {
    case "REGISTER":
      return { ...state, user: action.payload };
    case "LOGIN":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
}

export default authReducer;
export type { AuthState, User, Action };
