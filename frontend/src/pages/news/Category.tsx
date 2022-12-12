import { TextField } from '@mui/material'
import * as React from 'react'
import { useCategory } from './hooks/useCategory'
import { addCategory } from './hooks/addCategory'
import { Category } from './newsInterface'
import {Loading} from '../../design/components/Loading'

export function Category_Page() {
  const [categoryValues, setCategory] = React.useState<Category>({
    id: '',
    name: '',
  })
  const categorySet = useCategory();
  const addMutation = addCategory();

  const newCatagorySection = (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addMutation.mutate(categoryValues)
      }}
    >
    <TextField id="name" label="Name" value={categoryValues.name} 
      onChange={(event) => setCategory(prev => ({ ...prev, name: event.target.value}))} />
      <button>Create</button>
    </form>
  )
  


  return (
      <div>
        <p></p>
        { newCatagorySection }
        <br />
        <Loading />
        <ul>
          { categorySet.map((Cat) => (
          <li key={Cat.id}>{Cat.name}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  
  
