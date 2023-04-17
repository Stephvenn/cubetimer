import React, { useState, useEffect } from 'react';

function Stopwatch(): JSX.Element {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent): void {
      if (event.code === 'Space') {
        setIsRunning(prevState => !prevState);
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isRunning) {
      setStartTime(Date.now() - elapsedTime);

      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - (startTime || 0));
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, startTime, elapsedTime]);

  function formatTime(time: number): string {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  }

  return (
    <div>
      <h1>{formatTime(elapsedTime)}</h1>
      <p>Press spacebar to start/stop the stopwatch</p>
    </div>
  );
}

export default Stopwatch;
