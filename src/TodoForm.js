import React from 'react'
import { Box, TextField, IconButton } from '@mui/material'
import useInputState from './hooks/useInputState'
import AddIcon from '@mui/icons-material/Add'
import { BiPlus } from 'react-icons/bi'

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('')
  return (
    <Box style={{ margin: '1rem 0', padding: '0' }}>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo(value)
          reset()
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
          sx={{ backgroundColor: '#FAFAFA' }}
          InputProps={{
            endAdornment: (
              <IconButton type='submit' color='primary'>
                <BiPlus />
              </IconButton>
            )
          }}
        />
      </form>
    </Box>
  )
}

export default TodoForm
