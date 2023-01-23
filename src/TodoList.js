import React from 'react'
import { Box, Paper, List, Button, Divider } from '@mui/material'
import Todo from './Todo'

function TodoList({
  todos,
  removeTodo,
  toggleTodo,
  editTodo,
  removeAllDoneTodos,
  completed
}) {
  if (todos.length)
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            py: 1,
            my: 1
          }}
        >
          <Button variant='outlined' type='button' onClick={removeAllDoneTodos}>
            Delete done Todos
          </Button>
        </Box>

        <Paper>
          <List>
            {todos.map((todo, i) => (
              <>
                <Todo
                  // id={todo.id}
                  // task={todo.task}
                  // completed={todo.completed}
                  {...todo} // the three above in spread operator (props)
                  key={todo.id} // Don't include key in ...Spread
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  editTodo={editTodo}
                />
                {i < todos.length - 1 && <Divider />}
              </>
            ))}
          </List>
        </Paper>
      </>
    )
  return null
}

export default TodoList
