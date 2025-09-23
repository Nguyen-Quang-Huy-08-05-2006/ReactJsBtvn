import axios from "axios";

const API_URL = "http://localhost:3000/students";

export const getAllStudent = () => axios.get(API_URL);
export const addStudent = (student: { student_name: string; email: string }) =>
  axios.post(API_URL, student);
export const deleteStudent = (id: number) => axios.delete(`${API_URL}/${id}`);
export const updateStudent = (id: number, student: { student_name: string; email: string }) =>
  axios.put(`${API_URL}/${id}`, student);
