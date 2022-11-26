import axios from "axios";
const BASE_URL: string = "http://127.0.0.1:8000/";


export default axios.create({
    baseURL: BASE_URL
});

export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
    "Content-type": "application/json",
  },
  //withCredentials: true
});