import {useState} from 'react';
import './App.css';
import Timer from './components/Timer';
import ScrambleBar from './components/ScrambleBar';
import PrevTimes from './components/PrevTimes';

function App() {
    const [active, setActive] = useState<boolean>(false);
    const [timesArray, setTimesArray] = useState<string[]>([]);

  return (
    <div className="App">
      <ScrambleBar active={active}/>
      <div className='timer-container'>
        <PrevTimes timesArray={timesArray} setTimesArray={setTimesArray}/>
        <Timer active={active} setActive={setActive} setTimesArray={setTimesArray}/>
      </div>
    </div>
  );
}

export default App;
