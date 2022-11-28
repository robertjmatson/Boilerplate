import { TextField } from '@mui/material'
import * as React from 'react'
import { useNews } from '../../utils/api/newsapi'


function News() {
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
        <TextField id="title" label="Title" defaultValue="title" />
        <TextField id="author" label="Author" defaultValue="1" />
        <TextField id="excerpt" label="Excerpt" defaultValue="Excerpt" />
        <TextField id="content" label="Title" defaultValue="Content" />
        <TextField id="status" label="Status" defaultValue="Published" />
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



export function Home() {
  return (
    <>
      <News />
    </>
  )
}
