import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [timeRemaining, setTimeRemaining] = useState(1 * 6 * 1000);
  const [isActive, setIsActive] = useState(true);
  const [isOver, setIsOver] = useState(false);
  const [isRunningOut, setRunningOut] = useState(false);

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

  return (
    <>
      <Header minutes={minutes} seconds={seconds} isOver={isOver} isRunningOut={isRunningOut} />
      <Main isOver={isOver} />
    </>
  );
}

export default App;
