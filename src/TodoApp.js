import React from 'react'
import { Paper, Grid, Typography } from '@mui/material'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { TodosProvider } from './context/todos.context'

function TodoApp() {
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
      <Typography color='inherit' variant='h1' textAlign='center'>
        My Todos
      </Typography>

      <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp
