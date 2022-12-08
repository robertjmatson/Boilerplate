import { TextField } from '@mui/material'
import * as React from 'react'
import { useNews, addNews } from '../../utils/api/newsapi'
import { rawNews } from '../../utils/api/newsapi';



export function Home() {
  const [newsValues, setNews] = React.useState<rawNews>({
    id: '',
    title: '',
    author: '1',
    excerpt: '',
    content: '',
    status: '',
  });
  const { isFetching, ...queryInfo } = useNews()
  const addMutation = addNews();

const newNewsSection = (
  <form
      onSubmit={(e) => {
        e.preventDefault()
        addMutation.mutate(newsValues)
      }}
  >
    
    <TextField id="title" label="Title" value={newsValues.title} onChange={(event) => setNews(prevNews => ({ ...prevNews, title: event.target.value}))} />
    <TextField id="excerpt" label="Excerpt" value={newsValues.excerpt} onChange={(event) => setNews(prevNews => ({ ...prevNews, excerpt: event.target.value}))} />
    <TextField id="content" label="Title" value={newsValues.content} onChange={(event) => setNews(prevNews => ({ ...prevNews, content: event.target.value}))} />
    <TextField id="status" label="Status" value={newsValues.status} onChange={(event) => setNews(prevNews => ({ ...prevNews, status: event.target.value}))} />

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



