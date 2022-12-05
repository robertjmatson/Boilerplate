import { TextField } from '@mui/material'
import * as React from 'react'
import { useNews, addNews } from '../../utils/api/newsapi'


export function Home() {
  const [newsValues, setNews] = React.useState({
    title: '',
    author: '',
    excerpt: '',
    content: '',
    newsStatus: ''
  });
  const { isFetching, ...queryInfo } = useNews()
  const addMutation = addNews();

const newNewsSection = (
  <form
      onSubmit={(e) => {
        e.preventDefault()
        addMutation.mutate(newsValues.title, newsValues.author, newsValues.excerpt, newsValues.content, newsValues. newsStatus)
      }}
  >
    <TextField id="title" label="Title" value={newsValues.title} />
    <TextField id="author" label="Author" value={newsValues.author} />
    <TextField id="excerpt" label="Excerpt" value={newsValues.excerpt} />
    <TextField id="content" label="Title" value={newsValues.content} />
    <TextField id="status" label="Status" value={newsValues.newsStatus} />
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



