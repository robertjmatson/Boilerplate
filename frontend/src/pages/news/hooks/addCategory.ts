import { useQueryClient, useMutation, } from '@tanstack/react-query'
import { axiosInstance } from '../../../utils/react-query/axios';
import { Category } from '../newsInterface';
import { queryKeys } from '../../../utils/react-query/keys';


export const addCategory = () => {
    const queryClient = useQueryClient()

    return useMutation(
        (newCat) => axiosInstance.post('news/categories/', { 
            ...newCat
        }),
        {    
            // When mutate is called:
            onMutate: async (createdCategory: Category) => {
              await queryClient.cancelQueries([queryKeys.category])
      
              // Snapshot the previous value
              const previousCategory= queryClient.getQueryData<Category>([queryKeys.category])
              // Optimistically update to the new value
              return { previousCategory }
            },
            // If the mutation fails,
            // use the context returned from onMutate to roll back
            onError: (err, variables, context) => {
              if (context?.previousCategory) {
                queryClient.setQueryData<Category>([queryKeys.category], context.previousCategory)
              }
            },
            // Always refetch after error or success:
            onSettled: () => {
              queryClient.invalidateQueries([queryKeys.category])
            },
          },
        )
      }