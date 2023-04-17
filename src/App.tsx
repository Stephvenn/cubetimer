import React from 'react';
import './App.css';
import Timer from './components/Timer';
import ScrambleBar from './components/ScrambleBar';
import Stopwatch from './components/Stopwatch';

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
