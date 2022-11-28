import { TextField } from '@mui/material'
import * as React from 'react'

import axios from 'axios'
import {
  useQuery,
  useQueryClient,
  useMutation,
} from '@tanstack/react-query'

export type Catagories = [{
    id: string,
    name: string,
  }]



async function fetchCat(): Promise<Catagories> {
  const res = await axios.get('http://127.0.0.1:8000/api/news/catagories')
  console.log(res.data)
  return res.data
}

export function useCats() {
  return useQuery(['cats'], fetchCat)
}

function Cats() {
    const [text, setText] = React.useState('')
    const { isFetching, ...queryInfo } = useCats()
  
    return (
      <div>
              <p>
      </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
        <TextField id="title" label="Title" defaultValue="title" onChange={(event) => setText(event.target.value)}
            value={text}/>
          <button>Create</button>
        </form>
        <br />
        {queryInfo.isSuccess && (
          <>
            <ul>
            {queryInfo.data.map((Catagories) => (
                <li key={Catagories.id}>{Catagories.name}</li>
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
  
  
  
  export function Cat() {
    return (
      <>
        <Cats />
      </>
    )
  }
  