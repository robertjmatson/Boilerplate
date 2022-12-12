import { useQuery, useQueryClient, useMutation, } from '@tanstack/react-query'
import { axiosInstance } from '../react-query/axios'
import { queryKeys } from '../react-query/keys'

export type auth_item = {
  email: string,
  password: string,
}


export const getToken = () => {
  const queryClient = useQueryClient()
  
  //newsValues.title, newsValues.author, newsValues.excerpt, newsValues.content, newsValues. newsStatus
  return useMutation(
    (auth) => axiosInstance.post<auth_item>('auth/login/', { 
      ...auth
      
    }),
    {    
      // When mutate is called:
      onMutate: async (credentials: auth_item) => {
        // Cancel any outgoing refetches
        // (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries([])
        
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