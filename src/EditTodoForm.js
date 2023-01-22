import React from 'react'
import useInputState from './hooks/useInputState'
import { TextField } from '@mui/material'

function EditTodoForm({ id, task, editTodo, toggleEditTodo }) {
  const [value, handleChange, reset] = useInputState(task)
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        editTodo(id, value)
        reset()
        toggleEditTodo()
      }}
      style={{ margin: '0 1rem', width: '100%'}}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm
