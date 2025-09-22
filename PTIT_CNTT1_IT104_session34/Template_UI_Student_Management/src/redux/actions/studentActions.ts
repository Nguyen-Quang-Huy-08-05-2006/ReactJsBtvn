import type { Student } from "../../utils/types";

export const ADD_STUDENT = "ADD_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const SORT_STUDENTS = "SORT_STUDENTS";
export const SEARCH_STUDENTS = "SEARCH_STUDENTS";

export const addStudent = (student: Student) => ({
  type: ADD_STUDENT,
  payload: student,
});

export const deleteStudent = (id: number) => ({
  type: DELETE_STUDENT,
  payload: id,
});

export const updateStudent = (student: Student) => ({
  type: UPDATE_STUDENT,
  payload: student,
});

export const sortStudents = () => ({
  type: SORT_STUDENTS,
});

export const searchStudents = (keyword: string) => ({
  type: SEARCH_STUDENTS,
  payload: keyword,
});
