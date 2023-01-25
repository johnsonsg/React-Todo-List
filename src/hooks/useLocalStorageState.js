import { useState, useEffect } from 'react'

function useLocalStorageState(key, defaultVal) {
  // make piece of state, based off of value in localstorage or default val
  const [state, setState] = useState(() => {
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
  return [state, setState]
}
export default useLocalStorageState
