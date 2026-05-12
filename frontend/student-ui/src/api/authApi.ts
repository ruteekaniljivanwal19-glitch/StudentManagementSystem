import axiosClient from "./axiosClient";

export const loginUser = (data: {
  username: string;
  password: string;
}) => {
  return axiosClient.post("/Auth/login", data);
};