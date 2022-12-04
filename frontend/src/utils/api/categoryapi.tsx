import axios from 'axios'
import { useQuery, useQueryClient, useMutation, } from '@tanstack/react-query'
import {BASE_URL} from '../env'

 export type Category = {
    id: string,
    name: string,
  }[]

async function fetchCat(): Promise<Category> {
  const res = await axios.get(BASE_URL +'news/categories')
  console.log(res.data)
  return res.data
}

export function useCats() {
  return useQuery(['cat-q'], fetchCat)
}

export const addCATMutation = () => {
  const queryClient = useQueryClient()
  
  return useMutation(
    (newCat) => axios.post(BASE_URL +'news/categories', { name: newCat}),
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