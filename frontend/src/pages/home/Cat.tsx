import { TextField } from '@mui/material'
import * as React from 'react'

import axios from 'axios'
import {
  useQuery,
  useQueryClient,
  useMutation,
} from '@tanstack/react-query'

 export type Category = [{
    id: string,
    name: string,
  }]

//  export  type Category = {
//    Object: readonly {
//      id: string
//      name: string
//    }[]
 //   ts: number
 // }



async function fetchCat(): Promise<Category> {
  const res = await axios.get('http://127.0.0.1:8000/api/news/categories')
  console.log(res.data)
  return res.data
}

export function useCats() {
  return useQuery(['cat-q'], fetchCat)
}

function Category_Element() {
  const queryClient = useQueryClient()
  const [name, setText] = React.useState('')
  const { isFetching, ...queryInfo } = useCats()
  

  const addCATMutation = useMutation(
    (newCat) => axios.post('http://127.0.0.1:8000/api/news/categories/', { name: newCat }),
    {
      // When mutate is called:
      onMutate: async (newCat: string) => {
        setText('')
        // Cancel any outgoing refetches
        // (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(['cat-q'])

        // Snapshot the previous value
        const previousCat = queryClient.getQueryData<Category>(['cat-q'])

        // Optimistically update to the new value

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
        queryClient.invalidateQueries(['Category'])
      },
    },
  )









  ///
    return (
      <div>
        <p></p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            addCATMutation.mutate(name)
          }}
        >
        <TextField id="name" label="Name" value={name} onChange={(event) => setText(event.target.value)}
           />
          <button disabled={addCATMutation.isLoading}>Create</button>
        </form>
        <br />
        {queryInfo.isSuccess && (
          <>
            <ul>
            {queryInfo.data.map((Cat) => (
                <li key={Cat.id}>{Cat.name}</li>
              ))}
            </ul>
            {isFetching && <div>Updating...</div>}
          </>
        )}
        {queryInfo.isLoading && 'Loading'}
        {queryInfo.error instanceof Error && queryInfo.error.message}
      </div>
    )
  }
  
  
  
  export function Category_Page() {
    return (
      <>
        <Category_Element />
      </>
    )
  }
  