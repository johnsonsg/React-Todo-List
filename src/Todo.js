import React from 'react'
import { ListItem, ListItemText, Checkbox } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'

export default function Todo({ id, task, completed, removeTodo, toggleTodo }) {
  return (
    <ListItem>
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
        <IconButton aria-label='Edit'>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
