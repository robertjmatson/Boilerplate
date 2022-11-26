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
