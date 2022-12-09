import axios from 'axios'
import { useQuery, useQueryClient, useMutation, } from '@tanstack/react-query'
import {BASE_URL} from '../env'

export type auth_item = {
  email: string,
  password: string,
}


export const getToken = () => {
  const queryClient = useQueryClient()
  
  //newsValues.title, newsValues.author, newsValues.excerpt, newsValues.content, newsValues. newsStatus
  return useMutation(
    (auth) => axios.post<auth_item>(BASE_URL +'auth/login/', { 
      ...auth
    }),
    {    
      // When mutate is called:
      onMutate: async (credentials: auth_item) => {
        // Cancel any outgoing refetches
        // (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(['auth'])

        // Snapshot the previous value
        const previousNews = queryClient.getQueryData<auth_item>(['auth'])

        // Optimistically update to the new value

        return { }
      },
      // If the mutation fails,
      // use the context returned from onMutate to roll back
      onError: (err, variables, context) => {
        if (err) {
          console.log(err)
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(['auth'])
      },
    },
  )
}