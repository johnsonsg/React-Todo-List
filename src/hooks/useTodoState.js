// import { useState } from 'react'
import useLocalStorageState from './useLocalStorageState'
import { v4 as uuid } from 'uuid'

export default initialTodos => {
  // const [todos, setTodos] = useState(initialTodos)
  /**
   *  instead of using {useState}, we can use our custom Hook 'useLocalStorage'
   *  A custom hook inside another custom hook.
   *  Make sure you pass in a key "key" to initialize it
   *  so, we want it to be stored under the key of 'todos'
   * @params for useLocalStorageState (key, value) = ('todos', initiaTodos)
   */

  const [todos, setTodos] = useLocalStorageState('todos', initialTodos)

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
    },
    removeTodo: todoId => {
      // filter out removed todo
      const updateTodos = todos.filter(todo => todo.id !== todoId)
      // call setTodos with new todos array
      setTodos(updateTodos)
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
      setTodos(updatedTodos)
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      )
      setTodos(updatedTodos)
    },
    removeAllDoneTodos: () => {
      const filteredItems = todos.filter(todo => todo.completed === false)
      setTodos(filteredItems)
    }
  }
}
