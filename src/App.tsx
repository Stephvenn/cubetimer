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
        
        callBackendData('updatetimes', timesArray)
    }, [timesArray]);

    async function callBackend(option: string): Promise<void> {
        try{
            const response = await fetch(`http://localhost:4000/${option}`);
            if (!response.ok) {
                throw new Error('network error');
            }
            const data = await response.text();
            console.log(data);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    
    }

    async function callBackendData(option: string, jsonData: {time: string, scramble: string}[]): Promise<void> {
        try{
            const response = await fetch(`http://localhost:4000/${option}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            });
            if (!response.ok) {
                throw new Error('network error');
            }
            const data = await response.text();
            console.log(data);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    
    }


  return (
    <div className="App">
        <ScrambleBar active={active} curScramble={curScramble} setCurScramble={setCurScramble}/>
        <div className='container-fluid'>
            <div className="row">
                <div className="col-2">
                    <PrevTimes timesArray={timesArray} setTimesArray={setTimesArray} callBackend={callBackend}/>
                </div>
                <div className="col-7">
                    <Timer active={active} setActive={setActive} setTimesArray={setTimesArray} curScramble={curScramble}/>
                </div>
            </div>
        </div>
    <script async defer src="https://apis.google.com/js/api.js"></script>
    <script async defer src="https://accounts.google.com/gsi/client"></script>
    </div>
  );
}

export default App;
