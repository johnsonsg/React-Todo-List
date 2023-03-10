import { v4 as uuid } from 'uuid'
/** Note
 * Adding a reducer now elminates the useTodoState.js hook.
 */
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: uuid(), task: action.task, completed: false }]

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )

    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      )

    case 'REMOVE_ALL_DONE_TODOS':
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}

export default reducer

// {type: 'ADD_TODO', task: 'walk the dog'}
// {type: 'REMOVE_TODO', id: 123}
// {type: 'TOGGLE_TODO', id: 123}
// {type: 'EDIT_TODO', ID: 123, newTask: 'walk cat'}
