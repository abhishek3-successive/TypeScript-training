'use client';
import { useState, useEffect, useRef } from 'react';

function useTimer(initialTime: number) {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // properly typed ref

  // Start the timer
  const start = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  // Pause the timer
  const pause = () => {
    setIsRunning(false);
  };

  // Reset the timer
  const reset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  return {
    timeLeft,
    isRunning,
    start,
    pause,
    reset,
  };
}

export default useTimer;
