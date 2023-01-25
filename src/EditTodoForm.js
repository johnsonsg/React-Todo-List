import React, {useContext} from 'react'
import useInputState from './hooks/useInputState'
import { TextField } from '@mui/material'
import { TodosContext } from './context/todos.context'

function EditTodoForm({ id, task, toggleEditTodo }) {
  const {editTodo} = useContext(TodosContext)
  const [value, handleChange, reset] = useInputState(task)
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        editTodo(id, value)
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
        variant="standard"
      />
    </form>
  )
}

export default EditTodoForm
