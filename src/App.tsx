import React from 'react';
import Timer from './components/Timer';
import ScrambleBar from './components/ScrambleBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrambleBar />
      <div className='timer-container'>
        <Timer />
      </div>
    </div>
  );
}

export default App;
