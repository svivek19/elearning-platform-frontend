import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://elearning-platform-backend-yrbf.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
