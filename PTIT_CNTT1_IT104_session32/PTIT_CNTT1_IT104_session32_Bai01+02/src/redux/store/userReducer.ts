import { User } from "./types";

interface UserState {
  currentUser: User | null;
  users: User[];
}

const initialState: UserState = {
  currentUser: {
    id: 1,
    userName: "Nguyen Van A",
    gender: "Male",
    dateBirth: "2000-01-01",
    address: "Ha Noi",
  },
  users: [
    {
      id: 1,
      userName: "Nguyen Van A",
      gender: "Male",
      dateBirth: "2000-01-01",
      address: "Ha Noi",
    },
    {
      id: 2,
      userName: "Tran Thi B",
      gender: "Female",
      dateBirth: "2001-02-02",
      address: "Da Nang",
    },
    {
      id: 3,
      userName: "Le Van C",
      gender: "Male",
      dateBirth: "2002-03-03",
      address: "HCM",
    },
  ],
};

type Action =
  | { type: "SET_CURRENT_USER"; payload: number };

function userReducer(state = initialState, action: Action): UserState {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: state.users.find((u) => u.id === action.payload) || null,
      };
    default:
      return state;
  }
}

export default userReducer;
export type { UserState, Action };
