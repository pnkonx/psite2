import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(' Mushrooms');//2 useStates called at the same time 

  function decrementCount() {
    setCount(prevCount => prevCount - 1)// this way uses the previous value.
  }
  function incrementCount() {// this way uses the original value. this will throw off a repeat function .
    setCount(count + 1)
  }

  return (
        <div className="App">
          <button onClick={decrementCount}>-</button>
          <span>{count}</span>
          <span>{theme}</span>
          <button onClick={incrementCount}>+</button>
        </div>
  );
        
    
}

export default App;
