import React, { useState } from 'react'
import { Paper, AppBar, Toolbar, Grid, Typography } from '@mui/material'
import TodoList from './TodoList'

function TodoApp() {
  const initialTodos = [
    {id: 1, task: 'Clean Fishtank', completed: false },
    { id: 2, task: 'Wash Truck', completed: true },
    { id: 3, task: 'Clean Garage', completed: false }
  ]
  const [todos, setTodos] = useState(initialTodos)
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  )
}

export default TodoApp

// - TodoApp
//   - TodoForm
//   - TodoList
//     - TodoItem

// id, task, completed (true or false)
