import { useState, useEffect, useRef } from 'react';

export const useTimeElapsed = (startDate) => {
  const [years, setYears] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const lastUpdatedTimeRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = now - startDate;

      const inYears = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      const inDays = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
      );
      const inHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const inMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const inSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      const newTimeElapsed = `${inYears} years, ${inDays} days, ${inHours} hours, ${inMinutes} minutes, ${inSeconds} seconds`;

      if (newTimeElapsed !== lastUpdatedTimeRef.current) {
        setYears(inYears);
        setDays(inDays);
        setHours(inHours);
        setMinutes(inMinutes);
        setSeconds(inSeconds);
        lastUpdatedTimeRef.current = newTimeElapsed;
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate]);

  return { years, days, hours, minutes, seconds };
};
