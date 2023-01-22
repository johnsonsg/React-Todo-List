import React from 'react'
import useToggleState from './hooks/useToggleState'
import { ListItem, ListItemText, Checkbox } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import EditTodoForm from './EditTodoForm'

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditingTodo, toggleIsEditing] = useToggleState(false)
  return (
    <ListItem>
      {isEditingTodo ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditTodo={toggleIsEditing}
        />
      ) : (
        <>
          <Checkbox
            // disableRipple
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Edit' onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}

export default Todo
