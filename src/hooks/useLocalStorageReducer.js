import { useReducer, useEffect } from 'react'
/** NOTE
 * useLocalStorageReducer.js
 * What we did was take what we had in useLocalStorageState
 * and added a reducer
 * Now, we no longer need useLocalStorageState.js
 */
function useLocalStorageReducer(key, defaultVal, reducer) {
  // make piece of state, based off of value in localstorage or default val
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val
    try {
      // const initialTodos = JSON.parse(window.localStorage.getItem('todos') || [])
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    } catch (e) {
      val = defaultVal
    }
    return val
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, dispatch]
}

export { useLocalStorageReducer }
