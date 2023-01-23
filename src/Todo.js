import React from 'react'
import useToggleState from './hooks/useToggleState'
import { ListItem, ListItemText, Checkbox } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { BiEdit, BiTrash } from 'react-icons/bi'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import EditTodoForm from './EditTodoForm'

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditingTodo, toggleIsEditing] = useToggleState(false)
  return (
    <ListItem style={{ height: '64px' }}>
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
            style={{
              color: completed ? '#DB3346' : '#636465'
            }}
          />
          <ListItemText
            style={{
              textDecoration: completed ? 'line-through' : 'none',
              color: completed ? '#DB3346' : '#636465'
            }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton color='primary' aria-label='Edit' onClick={toggleIsEditing}>
              <BiEdit />
            </IconButton>
            <IconButton style={{color: '#DB3346'}} aria-label='Delete' onClick={() => removeTodo(id)}>
              <BiTrash />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}

export default Todo
