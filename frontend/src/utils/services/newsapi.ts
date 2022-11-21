import axios from "axios";
import News from "../types/news";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-type": "application/json",
  },
});

const findAll = async () => {
  const response = await apiClient.get<News[]>("/");
  return response.data;
}

const findById = async (id: any) => {
  const response = await apiClient.get<News>(`/${id}`);
  return response.data;
}

const create = async ({ title, content, status, excerpt }: News) => {
  const response = await apiClient.post<any>("/", { title, content, status, excerpt });
  return response.data;
}

const deleteById = async (id: any) => {
  const response = await apiClient.delete<any>(`/${id}`);
  return response.data;
}



const NewsService = {
  findAll,
  findById,
  create,
  deleteById,
}

export default NewsService;
