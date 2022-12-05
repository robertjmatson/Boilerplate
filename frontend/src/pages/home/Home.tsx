import { TextField } from '@mui/material'
import * as React from 'react'
import { useNews, addNews } from '../../utils/api/newsapi'


export function Home() {
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')

  const { isFetching, ...queryInfo } = useNews()
  const addMutation = addNews();

const newNewsSection = (
  <form
      onSubmit={(e) => {
        e.preventDefault()
        addMutation.mutate(title, author, excerpt, content, newsStatus)
      }}
  >
    <TextField id="title" label="Title" value={title} />
    <TextField id="author" label="Author" value={author} />
    <TextField id="excerpt" label="Excerpt" value={excerpt} />
    <TextField id="content" label="Title" value={content} />
    <TextField id="status" label="Status" value={newsStatus} />
      <button>Create</button>
    </form>
  )
  
  let content
  if (queryInfo.isLoading) {
    content = <p>Loading...</p>
  } else if (queryInfo.error instanceof Error) {
    content = <p>{queryInfo.error.message}</p>
  } else if (queryInfo.isSuccess ){
    content = queryInfo.data.map((news) => {
      return (
        <li key={news.id}>{news.title}</li>
      )})
  } else {

  }

  return (
    <div>
      <p></p>
      {newNewsSection}
      <br />
          <ul>
            { content }
          </ul>
    </div>
  )
}



