import * as React from 'react'
import axios from 'axios'

import {
  useQuery,
  useQueryClient,
  useMutation,
} from '@tanstack/react-query'



type News = [{
    id: string,
    title: string,
    excerpt?: string,
    content: string,
    status: string,
  }]

async function fetchNews(): Promise<News> {
  const res = await axios.get('http://127.0.0.1:8000/api/')
  console.log(res.data)
  return res.data
}

function useNews() {
  return useQuery(['news'], fetchNews)
}

function Example() {
  const queryClient = useQueryClient()
  const [text, setText] = React.useState('')
  const { isFetching, ...queryInfo } = useNews()

 
  return (
    <div>
      <p>
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <input
          type="text"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <button>Create</button>
      </form>
      <br />
      {queryInfo.isSuccess && (
        <>
          <ul>
          {queryInfo.data.map((news) => (
              <li key={news.id}>{news.title}</li>
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

export function Home2() {
  return (
    <>
      <Example />
    </>
  )
}
