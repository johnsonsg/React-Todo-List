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
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </form>
  )
}

export default EditTodoForm
