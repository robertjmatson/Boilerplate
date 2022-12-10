import axios, { AxiosRequestConfig } from 'axios';
export const BASE_URL: string = "http://127.0.0.1:8000/api/";

export interface Id {
    id: number;
  }

export interface NewUser {
    email: string;
    name?: string;
    address?: string;
    phone?: string;
    token?: string;
  }
  
  export type User = Id & NewUser;

export function getJWTHeader(user: User): Record<string, string> {
  return { Authorization: `Bearer ${user.token}` };
}

const config: AxiosRequestConfig = { baseURL: BASE_URL };
export const axiosInstance = axios.create(config);
