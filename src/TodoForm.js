import React from 'react'
import { Paper, TextField } from '@mui/material'
import useInputState from './hooks/useInputState'

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('')
  return (
    <div style={{ margin: '1rem 0', padding: '0' }}>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo(value)
          reset()
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
          style={{backgroundColor: '#FAFAFA'}}
        />
      </form>
    </div>
  )
}

export default TodoForm
