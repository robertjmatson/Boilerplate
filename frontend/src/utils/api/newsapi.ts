
import { News } from '../../utils/types/news'
import axios from 'axios'
import {
  useQuery,
  useQueryClient,
  useMutation,
} from '@tanstack/react-query'
import {BASE_URL} from '../env'

async function fetchNews(): Promise<News> {
  const res = await axios.get(BASE_URL + 'api/')
  console.log(res.data)
  return res.data
}

export function useNews() {
  return useQuery(['news'], fetchNews)
}

