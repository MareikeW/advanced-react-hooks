// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js
/*
import * as React from 'react'

// reducer-Funktion
// 1. Argument: aktueller Zustand
// 2. Argument: Wert der an setCount (setState) übergeben wird === action
function countReducer(count, newCount) {
  return newCount;
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // 1. Argument: reducer-Funktion
  // 2. Argument: Anfangswert
  const [count, setCount] = React.useReducer(countReducer, initialCount);

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  

  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
*/


/* Extra Credit 1 


import * as React from 'react'

// reducer-Funktion
function countReducer(count, step) {
  return count + step;
}

function Counter({initialCount = 0, step = 5}) {
  const [count, setCount] = React.useReducer(countReducer, initialCount); 

  const increment = () => setCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
*/


/* Extra Credit 2

import * as React from 'react'

// reducer-Funktion
// alter State wird mit neuem State überschrieben
function countReducer(state, action) {
  return {...state, ...action};
}

function Counter({initialCount = 0, step = 1}) {
  
  // 2. Argument: Objekt mit count-property
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount
  });

  const {count} = state; // count wird aus Stateobjekt destrukturiert
  const increment = () => setState({count: count + step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
*/

/* Extra Credit 3 
import * as React from 'react'

// reducer-Funktion
// reducer supports both the object as well as a function callback
function countReducer(state, action) {
  return {
    ...state, 
    ...(typeof action === "function" ? action(state) : action)
  };
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () =>
    // function callback
    setState(currentState => ({count: currentState.count + step}))
    // object callback: setState({count: count + step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
*/

/* Extra Credit 4 */
import * as React from 'react'

// reducer-Funktion
// reducer supports both the object as well as a function callback
function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return {count: state.count + action.step}
    }
    default: {
      throw new Error(`Unupported action type: ${action.type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state;
  const increment = () => dispatch({type: 'INCREMENT', step});
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App