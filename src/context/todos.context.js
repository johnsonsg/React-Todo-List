import React, { createContext, useReducer } from 'react'
import todoReducer from '../reducers/todo.reducer'
// import useTodoState from '../hooks/useTodoState'

const defaultTodos = []
export const TodosContext = createContext()

export function TodosProvider(props) {
  // const todosStuff = useTodoState(defaultTodos)
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos)
  return (
    // <TodosContext.Provider value={todosStuff}>
    // Now we pass in (state, action) = {{ todos, dispatch }}
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  )
}
