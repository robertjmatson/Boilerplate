import { useQuery, useQueryClient, useMutation, } from '@tanstack/react-query'
import { axiosInstance } from '../../../utils/react-query/axios';
import { News } from '../newsInterface';
import { queryKeys } from '../../../utils/react-query/keys';



async function getNews(): Promise<News[]> {
  const {data} = await axiosInstance.get('news/')
  return data
}

export function useNews(): News[] {
  const fallback: News[] | undefined = [];
  const { data = fallback } = useQuery([queryKeys.news], getNews);
  return data;
}
