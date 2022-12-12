import axios, { AxiosRequestConfig } from 'axios';
export const BASE_URL: string = "http://127.0.0.1:8000/api/";


const config: AxiosRequestConfig = { baseURL: BASE_URL };
export const axiosInstance = axios.create(config);
