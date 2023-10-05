import {useEffect, useState} from 'react';
import './App.css';
import Timer from './components/Timer';
import ScrambleBar from './components/ScrambleBar';
import PrevTimes from './components/PrevTimes';

function App() {
    const [active, setActive] = useState<boolean>(false);
    const [curScramble, setCurScramble] = useState<string>("");
    const [timesArray, setTimesArray] = useState<{time: string, scramble: string}[]>(JSON.parse(localStorage.getItem('timesArray')!) || []);

    useEffect(() => {
        localStorage.setItem('timesArray', JSON.stringify(timesArray));
    }, [timesArray]);


  return (
    <div className="App">
        <ScrambleBar active={active} curScramble={curScramble} setCurScramble={setCurScramble}/>
        <div className='container-fluid'>
            <div className="row">
                <div className="col-2">
                    <PrevTimes timesArray={timesArray} setTimesArray={setTimesArray}/>
                </div>
                <div className="col-8">
                    <Timer active={active} setActive={setActive} setTimesArray={setTimesArray} curScramble={curScramble}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
