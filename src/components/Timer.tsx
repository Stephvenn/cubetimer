import React, {useState, useRef} from 'react';

export default function Timer() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const startTimeRef: any = useRef();
    const requestRef: any = useRef();

    function startTimer() {
      setIsRunning((prev) => !prev);
      if (isRunning){
        startTimeRef.current = new Date().getTime();
        requestRef.current = requestAnimationFrame(updateElapsedTime);
      } else{
        cancelAnimationFrame(requestRef.current);
      }
    }
    const updateElapsedTime = (timestamp: any) => {
      if (!isRunning) {
        return;
      }
      const currentTime = new Date().getTime();
      const elapsed = currentTime - startTimeRef.current;
      setTime(elapsed);
      requestRef.current = requestAnimationFrame(updateElapsedTime);
    };

    const formatElapsedTime = (elapsedTime: number) => {
      const minutes = Math.floor(elapsedTime / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      const milliseconds = elapsedTime % 1000;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    };

    return (
        <p className='timer' onClick={startTimer}>{formatElapsedTime(time)}</p>
    );
}