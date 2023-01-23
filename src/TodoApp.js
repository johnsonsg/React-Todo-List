import React from 'react'
import useTodoState from './hooks/useTodoState'
import { Paper, AppBar, Toolbar, Grid, Typography } from '@mui/material'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function TodoApp() {
  // ** Mock Data ** //
  // const initialTodos = [
  //   { id: 1, task: 'Clean Fishtank', completed: false },
  //   { id: 2, task: 'Wash Truck', completed: true },
  //   { id: 3, task: 'Clean Garage', completed: false }
  // ]

  //  *** Moved to hook 'useLocalStorageState *** //
  // const initialTodos = JSON.parse(window.localStorage.getItem('todos') || [])
  const initialTodos = []
  const {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
    removeAllDoneTodos
  } = useTodoState(initialTodos)

  //  *** Moved to hook 'useLocalStorageState *** //
  // useEffect(() => {
  //   window.localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#FAFAFA'
      }}
      elevation={0}
    >
      {/* <AppBar color='primary' position='static' style={{ height: '64px' }}> */}
      {/* <Toolbar> */}
      <Typography color='inherit' variant='h1' textAlign='center'>
        My Todos
      </Typography>
      {/* </Toolbar> */}
      {/* </AppBar> */}

      <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            removeAllDoneTodos={removeAllDoneTodos}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp
