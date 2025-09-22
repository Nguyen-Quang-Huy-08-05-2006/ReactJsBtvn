import {
  ADD_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
  SORT_STUDENTS,
  SEARCH_STUDENTS,
} from "../actions/studentActions";
import type { Student } from "../../utils/types";

interface StudentState {
  list: Student[];
  originalList: Student[];
}

const initialState: StudentState = {
  list: [
    {
      id: 1,
      fullName: "Nguyễn Văn A",
      age: 20,
      gender: true,
      dateOfBirth: new Date("2005-01-01"),
      placeOfBirth: "Hà Nội",
      address: "Hà Nội",
    },
    {
      id: 2,
      fullName: "Nguyễn Văn B",
      age: 21,
      gender: false,
      dateOfBirth: new Date("2004-02-15"),
      placeOfBirth: "Đà Nẵng",
      address: "Đà Nẵng",
    },
    {
      id: 3,
      fullName: "Nguyễn Văn C",
      age: 19,
      gender: true,
      dateOfBirth: new Date("2006-05-20"),
      placeOfBirth: "TP.HCM",
      address: "TP.HCM",
    },
  ],
  originalList: [],
};

const studentReducer = (state = initialState, action: any): StudentState => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_STUDENT:
      return {
        ...state,
        list: state.list.filter((s) => s.id !== action.payload),
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        list: state.list.map((s) =>
          s.id === action.payload.id ? action.payload : s
        ),
      };
    case SORT_STUDENTS:
      return {
        ...state,
        list: [...state.list].sort((a, b) =>
          a.fullName.localeCompare(b.fullName)
        ),
      };
    case SEARCH_STUDENTS:
      return {
        ...state,
        list: state.originalList.length ? state.originalList : state.list,
        originalList: state.originalList.length ? state.originalList : state.list,
      };
    default:
      return state;
  }
};

export default studentReducer;
