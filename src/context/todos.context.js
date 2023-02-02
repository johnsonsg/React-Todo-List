import React, { createContext } from 'react'
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer'
import todoReducer from '../reducers/todo.reducer'

const defaultTodos = []

export const TodosContext = createContext()
export const DispatchContext = createContext()

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    'todos', // first argument is the "key" we are looking for in useLocalStorageReducer
    defaultTodos, // second argument is the "defaultVal"
    todoReducer // third is the "reducer"
  )
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}
