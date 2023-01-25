import React, { useContext, memo } from 'react'
import useToggleState from './hooks/useToggleState'
import { ListItem, ListItemText, Checkbox } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { BiEdit, BiTrash } from 'react-icons/bi'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import EditTodoForm from './EditTodoForm'
import { DispatchContext } from './context/todos.context'

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext)
  const [isEditingTodo, toggleIsEditing] = useToggleState(false)

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditingTodo ? (
        <EditTodoForm id={id} task={task} toggleEditTodo={toggleIsEditing} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({ type: 'TOGGLE_TODO', id: id })}
            inputProps={{ 'aria-label': 'controlled' }}
            style={{
              color: completed ? '#DB3346' : '#636465'
            }}
            // disableRipple'
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
            <IconButton
              color='primary'
              aria-label='Edit'
              onClick={toggleIsEditing}
            >
              <BiEdit />
            </IconButton>
            <IconButton
              style={{ color: '#DB3346' }}
              aria-label='Delete'
              onClick={() => dispatch({ type: 'REMOVE_TODO', id: id })}
            >
              <BiTrash />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}

export default memo(Todo)
