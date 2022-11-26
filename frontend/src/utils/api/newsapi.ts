
import News from "../types/news";
import { apiClient } from "../services/axios";

const findAll = async () => {
  const response = await apiClient.get<News[]>("api/");
  return response.data;
}

const findById = async (id: any) => {
  const response = await apiClient.get<News>(`api/${id}`);
  return response.data;
}

const create = async ({ title, content, status, excerpt }: News) => {
  const response = await apiClient.post<any>("api/", { title, content, status, excerpt });
  return response.data;
}

const deleteById = async (id: any) => {
  const response = await apiClient.delete<any>(`api/${id}`);
  return response.data;
}



const NewsService = {
  findAll,
  findById,
  create,
  deleteById,
}

export default NewsService;
