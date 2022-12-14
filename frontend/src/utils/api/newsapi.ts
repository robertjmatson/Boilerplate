import axios from 'axios'
import { useQuery, useQueryClient, useMutation, } from '@tanstack/react-query'
import {BASE_URL} from '../env'

export interface Id {
  id: number;
}

export type newNews = {
  title: string,
  author: string,
  excerpt?: string,
  content: string,
  status: string,
}

export type News = Id & newNews;

export type Category = {
  id: string,
  name: string,
}[]

export type rawNews = {
  id: string,
  title: string,
  author: string,
  excerpt?: string,
  content: string,
  status: string,
}

export type NewsArray = Array<rawNews>

async function fetchNews(): Promise<NewsArray> {
  const res = await axios.get(BASE_URL + 'news/')
  return res.data
}

export function useNews() {
  return useQuery(['news'], fetchNews)
}

async function fetchCat(): Promise<Category> {
  const res = await axios.get(BASE_URL +'news/categories/')
  return res.data
}

export function useCats() {
  return useQuery(['cat-q'], (fetchCat))
}



export const addNews = () => {
  const queryClient = useQueryClient()
  
  return useMutation(
    (newNews) => axios.post(BASE_URL +'news/', { 
      ...newNews
    }),
    {    
      // When mutate is called:
      onMutate: async (createdNews: rawNews) => {
        // Cancel any outgoing refetches
        // (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(['news'])

        // Snapshot the previous value
        const previousNews = queryClient.getQueryData<NewsArray>(['news'])

        // Optimistically update to the new value
        if (previousNews) {
          queryClient.setQueryData<NewsArray>(['news'], [...previousNews, {
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
          queryClient.setQueryData<NewsArray>(['news'], context.previousNews)
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(['news'])
      },
    },
  )
}



export const addCATMutation = () => {
  const queryClient = useQueryClient()
  
  return useMutation(
    (newCat) => axios.post(BASE_URL +'news/categories/', { name: newCat}),
    {    
      
      // When mutate is called:
      onMutate: async (createdCat: string) => {
        // Cancel any outgoing refetches
        // (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(['cat-q'])

        // Snapshot the previous value
        const previousCat = queryClient.getQueryData<Category>(['cat-q'])

        // Optimistically update to the new value
        if (previousCat) {
          queryClient.setQueryData<Category>(['cat-q'], [...previousCat, {id: Math.random().toString(), name: createdCat} ])
          }
            

        return { previousCat }
      },
      // If the mutation fails,
      // use the context returned from onMutate to roll back
      onError: (err, variables, context) => {
        if (context?.previousCat) {
          queryClient.setQueryData<Category>(['cat-q'], context.previousCat)
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(['cat-q'])
      },
    },
  )
}