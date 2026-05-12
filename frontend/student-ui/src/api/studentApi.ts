import axiosClient from "./axiosClient";
import type  { Student } from "../types/Student";

export const getStudents = () => {
  return axiosClient.get<Student[]>("/Student");
};

export const createStudent = (data: Student) => {
  return axiosClient.post("/Student", data);
};

export const updateStudent = (id: number, data: Student) => {
  return axiosClient.put(`/Student/${id}`, data);
};

export const deleteStudent = (id: number) => {
  return axiosClient.delete(`/Student/${id}`);
};