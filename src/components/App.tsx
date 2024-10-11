'use client';

import { useEffect, useMemo, useState } from 'react';
import { IPlan } from '../types/types';
import Header from './Header';
import Main from './Main';
import Modal from './Modal';

interface AppProps {
  data: IPlan[];
}

function App({ data }: AppProps) {
  const [timeRemaining, setTimeRemaining] = useState<number>(1 * 6 * 1000);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isOver, setIsOver] = useState<boolean>(false);
  const [isRunningOut, setRunningOut] = useState<boolean>(false);

  useEffect(() => {
    if (isActive && timeRemaining > 0) {
      const timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          const newTime = prevTime - 1000;

          if (newTime <= 30 * 1000 && !isRunningOut) {
            setRunningOut(true);
          }

          if (newTime <= 0) {
            clearInterval(timerInterval);
            setIsActive(false);
            setIsOver(true);
            return 0;
          }

          return newTime;
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timeRemaining, isActive, isRunningOut]);

  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const seconds = Math.floor((timeRemaining / 1000) % 60);

  const newPrices = useMemo(() => data.filter((item: IPlan) => item.isPopular === true), [data]);
  const oldPrices = useMemo(
    () => data.filter((item: IPlan) => item.isPopular === false && item.isDiscount === false),
    [data]
  );
  const popupPrices = useMemo(() => data.filter((item: IPlan) => item.isDiscount === true), [data]);

  return (
    <>
      <Header minutes={minutes} seconds={seconds} isOver={isOver} isRunningOut={isRunningOut} />
      <Main isOver={isOver} newPrices={newPrices} oldPrices={oldPrices} />
      <Modal isOver={isOver} popupPrices={popupPrices} oldPrices={oldPrices} />
    </>
  );
}

export default App;
