import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import { fetchData } from './utils/data';
import { IPlan } from './types/types';

function App() {
  const [timeRemaining, setTimeRemaining] = useState<number>(1 * 6 * 1000);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isOver, setIsOver] = useState<boolean>(false);
  const [isRunningOut, setRunningOut] = useState<boolean>(false);
  const [data, setData] = useState<IPlan[]>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

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

  const newPrices = useMemo(() => data.filter((item: any) => item.isPopular === true), [data]);
  const oldPrices = useMemo(
    () => data.filter((item: any) => item.isPopular === false && item.isDiscount === false),
    [data]
  );
  const popupPrices = useMemo(() => data.filter((item: any) => item.isDiscount === true), [data]);

  return (
    <>
      <Header minutes={minutes} seconds={seconds} isOver={isOver} isRunningOut={isRunningOut} />
      <Main isOver={isOver} newPrices={newPrices} oldPrices={oldPrices} />
      <Modal isOver={isOver} popupPrices={popupPrices} oldPrices={oldPrices} />
    </>
  );
}

export default App;
