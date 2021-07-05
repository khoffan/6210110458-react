import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

const word = "Hello";
function App() {
  return (
    <div className="App">
      {
        Array.from(word).map((c,i) =><CharacterCard value={c} key={i}></CharacterCard>)
      }
    </div>
  );
}

export default App;
