import React, { useContext } from 'react'
import useInputState from './hooks/useInputState'
import { TextField } from '@mui/material'
import { DispatchContext } from './context/todos.context'

function EditTodoForm({ id, task, toggleEditTodo }) {
  const dispatch = useContext(DispatchContext)
  const [value, handleChange, reset] = useInputState(task)
  console.log('EDIT FORM RENDER')
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        dispatch({ type: 'EDIT_TODO', id: id, newTask: value })
        reset()
        toggleEditTodo()
      }}
      style={{ margin: '0 1rem', width: '100%' }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
        variant='standard'
      />
    </form>
  )
}

export default EditTodoForm
