import { useEffect, useState } from 'react';

const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
 
  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = setInterval(() => {
          setSeconds(prevSeconds => {
          return prevSeconds + 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return {
    minutes,
    remainingSeconds,
    seconds,
    isRunning,
  };
};

export default useTimer;