import React, {useState, useEffect} from 'react';

export default function Timer() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId: any;
        if (isRunning) {
          // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
          intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
      }, [isRunning, time]);

      function startTimer() {
            setIsRunning((prev) => !prev);
      }

    return (
        <h2 className='timer' onClick={startTimer}>
            {time}
        </h2>
    );
}