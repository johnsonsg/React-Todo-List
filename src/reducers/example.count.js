import React, {useReducer} from 'react'
import "./styles.css";

function countReducer(state, action) {
  // In Redux we would use the 'switch' statement instead of the 'if'
  switch(action.type) {
    case 'INCREMENT':
      return {count: state.count + action.amount};
    case 'DECREMENT':
      return {count: state.count - action.amount};
    case 'RESET':
      return {count: 0};
    default:
    // Fetch a resource with some custom AJAX logic
    break;
  }

  // if(action.type === 'INCREMENT') return {count: state.count + action.amount};
  // if(action.type === 'DECREMENT') return {count: state.count - action.amount};
}
export default function App() {
  // (state, action) - 'dispatch' is the action
  const [state, dispatch] = useReducer(countReducer, {count: 0})
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: 'INCREMENT', amount: 1})}>Add 1</button>
      <button onClick={() => dispatch({type: 'INCREMENT', amount: 5})}>Add 5</button>
      <button onClick={() => dispatch({type: 'DECREMENT', amount: 1})}>Subtract 1</button>
      <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>

    </div>
  );
}

/**
 *  Reduce / Reducer - reduce is vanilla js function
 *  (accumulatedValue, nextItem) => nextAccumulatedValue
 *  It takes two values and "reduces" them down to one value
 *
 * In React, or our case, two values provided to our reducer are:
 * - The current state
 * - An action that (may) update the state
 * (state, action) => newState
 *
 * examples:
 * {type: 'ADD_TODO', task: 'Walk the cat'}
 * {type: 'INCREMENT', amount: 3}
 * {type: 'CHANGE_THREAT_LEVEL', level: 'red alert'}
 */