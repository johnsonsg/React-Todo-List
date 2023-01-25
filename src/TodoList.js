import React, { useContext } from 'react'
import { Box, Paper, List, Button, Divider } from '@mui/material'
import Todo from './Todo'
import { TodosContext } from './context/todos.context'

function TodoList() {
  const { todos, dispatch } = useContext(TodosContext)
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
          <Button
            variant='outlined'
            type='button'
            onClick={() => dispatch({ type: 'REMOVE_ALL_DONE_TODOS' })}
            // onClick={removeAllDoneTodos}
          >
            Delete Todos
          </Button>
        </Box>

        <Paper>
          {todos.map((todo, i) => (
            <List key={`Todo List Item ${todo.task}`}>
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 && <Divider />}
            </List>
          ))}
        </Paper>
      </>
    )
  return null
}

export default TodoList
