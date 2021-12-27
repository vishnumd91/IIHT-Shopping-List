import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      // Token expired or invalid, redirect to login page
      window.location.href = "/";
      localStorage.removeItem("userName");
    }
    return Promise.reject(error);
  }
);
