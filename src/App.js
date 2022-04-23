import React, { useState } from 'react';
import './App.css';

function App() {
  const [likes, setLikes] = useState(7)
  const [value, setValue] = useState('GitHab')
  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    setLikes(likes - 1)
  }
  return (
    <div className='App'>
      <h1>{likes}</h1> 
      <h1>{value}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <input type="text"
        value={value}
        onChange={event => setValue(event.target.value)} />
   </div>
  );
}

export default App;
