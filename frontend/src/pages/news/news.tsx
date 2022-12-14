import * as React from 'react'

import {Loading} from '../../design/components/Loading'
import { TextField } from '@mui/material'
import { News } from './newsInterface'
import { useNews } from './hooks/useNews'
import { addNews } from './hooks/addNews'

export function NewsPage() {
  const [newsValues, setNews] = React.useState<News>({
    id: '',
    title: '',
    author: '1',
    excerpt: '',
    content: '',
    status: '',
  });
  const newsSet = useNews();
  const addMutation = addNews();
  const newNewsSection = (
    <form
        onSubmit={(e) => {
          e.preventDefault()
          addMutation.mutate(newsValues)
        }}
    >
      
      <TextField id="title" label="Title" value={newsValues.title} 
        onChange={(event) => setNews(prevNews => ({ ...prevNews, title: event.target.value}))} />
      <TextField id="excerpt" label="Excerpt" value={newsValues.excerpt} onChange={(event) => setNews(prevNews => ({ ...prevNews, excerpt: event.target.value}))} />
      <TextField id="content" label="Title" value={newsValues.content} onChange={(event) => setNews(prevNews => ({ ...prevNews, content: event.target.value}))} />
      <TextField id="status" label="Status" value={newsValues.status} onChange={(event) => setNews(prevNews => ({ ...prevNews, status: event.target.value}))} />
  
        <button>Create</button>
      </form>
    )



    
  return (
    <div>
      <br />
        {newNewsSection}
      <br />
      <Loading />
          <ul>
            { newsSet.map((newsData)=> (
                <li key={newsData.id}>{newsData.title}</li>
            )) }
          </ul>
    </div>
  )
}



