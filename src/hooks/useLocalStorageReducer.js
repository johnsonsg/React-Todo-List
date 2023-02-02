import { useReducer, useEffect } from 'react'

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
