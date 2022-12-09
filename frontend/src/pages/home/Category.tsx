import { TextField } from '@mui/material'
import * as React from 'react'
import { useCats, addCATMutation } from '../../utils/api/newsapi'

export function Category_Page() {
  const [name, setText] = React.useState('')
  const { isFetching, ...queryInfo } = useCats()
  const addMutation = addCATMutation();

  const newCatagorySection = (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addMutation.mutate(name)
      }}
    >
    <TextField id="name" label="Name" value={name} onChange={(event) => setText(event.target.value)}/>
      <button disabled={addMutation.isLoading}>Create</button>
    </form>
  )
  
  let content
  if (queryInfo.isLoading) {
    content = <p>Loading...</p>
  } else if (queryInfo.error instanceof Error) {
    content = <p>{queryInfo.error.message}</p>
  } else if (queryInfo.isSuccess ){
    content = queryInfo.data.map((Cat) => {
      return (
        <li key={Cat.id}>{Cat.name}</li>
      )})
  } else {

  }


  return (
      <div>
        <p></p>
        { newCatagorySection }
        <br />
        <ul>
          { content }
        </ul>
      </div>
    )
  }
  
  
  
