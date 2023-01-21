import React, { useState } from 'react'
import { Paper, AppBar, Toolbar, Grid, Typography } from '@mui/material'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { v4 as uuid } from 'uuid'

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Clean Fishtank', completed: false },
    { id: 2, task: 'Wash Truck', completed: true },
    { id: 3, task: 'Clean Garage', completed: false }
  ]
  const [todos, setTodos] = useState(initialTodos)
  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
  }
  const removeTodo = todoId => {
    // filter out removed todo
    const updateTodos = todos.filter(todo => todo.id !== todoId)
    // call setTodos with new todos array
    setTodos(updateTodos)
  }
  const toggleTodo = todoId => {
    // Map through updated todo
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )
    // Call setTodos with updated todos array
    setTodos(updatedTodos)
  }

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

      <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp

// - TodoApp
//   - TodoForm
//   - TodoList
//     - TodoItem

// id, task, completed (true or false)
