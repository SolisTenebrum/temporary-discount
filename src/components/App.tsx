'use client';

import { useEffect, useMemo, useState } from 'react';
import { IPlan } from '../types/types';
import Header from './Header';
import Main from './Main';
import Modal from './Modal';

function App({ initialData }: { initialData: IPlan[] }) {
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

  const newPrices = useMemo(() => initialData.filter((item: IPlan) => item.isPopular === true), [initialData]);
  const oldPrices = useMemo(
    () => initialData.filter((item: IPlan) => item.isPopular === false && item.isDiscount === false),
    [initialData]
  );
  const popupPrices = useMemo(() => initialData.filter((item: IPlan) => item.isDiscount === true), [initialData]);

  return (
    <>
      <Header minutes={minutes} seconds={seconds} isOver={isOver} isRunningOut={isRunningOut} />
      <Main isOver={isOver} newPrices={newPrices} oldPrices={oldPrices} />
      <Modal isOver={isOver} popupPrices={popupPrices} oldPrices={oldPrices} />
    </>
  );
}

export default App;
