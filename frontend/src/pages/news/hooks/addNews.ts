import { useQuery, useQueryClient, useMutation, UseMutateFunction, } from '@tanstack/react-query'
import { axiosInstance } from '../../../utils/react-query/axios';
import { News } from '../newsInterface';
import { queryKeys } from '../../../utils/react-query/keys';




export const addNews = () => {
    const queryClient = useQueryClient()

    return useMutation(
        (newNews) => axiosInstance.post('news/', { 
            ...newNews
        }),
        {    
            // When mutate is called:
            onMutate: async (createdNews: News) => {
              // Cancel any outgoing refetches
              // (so they don't overwrite our optimistic update)
              await queryClient.cancelQueries([queryKeys.news])
      
              // Snapshot the previous value
              const previousNews= queryClient.getQueryData<News>([queryKeys.news])
              // Optimistically update to the new value
               
              return { previousNews }
            },
            // If the mutation fails,
            // use the context returned from onMutate to roll back
            onError: (err, variables, context) => {
              if (context?.previousNews) {
                queryClient.setQueryData<News>([queryKeys.news], context.previousNews)
              }
            },
            // Always refetch after error or success:
            onSettled: () => {
              queryClient.invalidateQueries([queryKeys.news])
            },
          },
        )
      }