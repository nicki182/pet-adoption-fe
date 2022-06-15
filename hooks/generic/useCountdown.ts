import { useEffect, useState, useCallback } from 'react';

const useCountdown = (start: number, countBy: number = 1000) => {
  const [count, setCount] = useState<number>(start);
  const [counter, setCounter] = useState<NodeJS.Timer>();
  const startCounter = useCallback(() => {
    const interval = setInterval(() => {
      setCount((pre) => pre - 1);
    }, countBy);
    setCounter(interval);
  }, [count, countBy]);
  const pause = () => {
    if (counter) clearInterval(counter);
  };
  const restart = () => {
    if (counter) clearInterval(counter);
    //setCount(start);
    startCounter();
  };

  return { count, pause, restart, startCounter };
};
export default useCountdown;
