import React, { useContext } from 'react'
import { Box, TextField, IconButton } from '@mui/material'
import useInputState from './hooks/useInputState'
import { BiPlus } from 'react-icons/bi'
import { DispatchContext } from './context/todos.context'

function TodoForm() {
  const [value, handleChange, reset] = useInputState('')
  const dispatch = useContext(DispatchContext)
  console.log('TODO FORM RENDER!!!')
  return (
    <Box style={{ margin: '1rem 0', padding: '0' }}>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch({ type: 'ADD_TODO', task: value })
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
