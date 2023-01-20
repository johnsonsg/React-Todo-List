import React from 'react'
import { Paper, List, Divider, ListItem, ListItemText } from '@mui/material'

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <ListItem>
            <ListItemText>{todo.task}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList