import axios from 'axios'
import { useQuery, useQueryClient, useMutation, } from '@tanstack/react-query'
import {BASE_URL} from '../env'

export type News = {
  id: string,
  title: string,
  author: string,
  excerpt?: string,
  content: string,
  status: string,
}[]
export type rawNews = {
  id: string,
  title: string,
  author: string,
  excerpt?: string,
  content: string,
  status: string,
}

async function fetchNews(): Promise<News> {
  const res = await axios.get(BASE_URL + 'news/')
  //console.log(res.data)
  return res.data
}

export function useNews() {
  return useQuery(['news'], fetchNews)
}

export const addNews = () => {
  const queryClient = useQueryClient()
  
  //newsValues.title, newsValues.author, newsValues.excerpt, newsValues.content, newsValues. newsStatus
  return useMutation(
    (newNews) => axios.post<News>(BASE_URL +'news/', { 
      ...newNews
    }),
    {    
      // When mutate is called:
      onMutate: async (createdNews: rawNews) => {
        // Cancel any outgoing refetches
        // (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(['news'])

        // Snapshot the previous value
        const previousNews = queryClient.getQueryData<News>(['news'])

        // Optimistically update to the new value
        if (previousNews) {
          queryClient.setQueryData<News>(['news'], [...previousNews, {
            id: Math.random().toString(), 
            title: createdNews.title, 
            author: createdNews.author, 
            content: createdNews.content, 
            status: createdNews.status
          }])
        }   
          
        return { previousNews }
      },
      // If the mutation fails,
      // use the context returned from onMutate to roll back
      onError: (err, variables, context) => {
        if (context?.previousNews) {
          queryClient.setQueryData<News>(['news'], context.previousNews)
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(['news'])
      },
    },
  )
}