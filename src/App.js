import React from 'react';
import './App.css';
import Wordcard from './Wordcard';

const word = "Hello";
function App() {
  return (
    <div className="App">
      <Wordcard value1={word}/>
    </div>
  );
}

export default App;
