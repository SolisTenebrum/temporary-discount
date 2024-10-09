import React from 'react';
import './Header.css';

const Header = React.memo(({ minutes, seconds, isRunningOut }: { minutes: number; seconds: number; isOver: boolean, isRunningOut: boolean }) => {
    
  return (
    <div className="header">
      <div className="header__container">
        <p className="header__discount-text">Скидка действует: </p>
        <div className="header__timer">
          <div className="header__time-block">
            <p className={`header__number ${isRunningOut ? 'header__number_over' : ''}`}>
              {String(minutes).padStart(2, '0')}
            </p>
            <p className="header__time-unit">минут</p>
          </div>
          <div className="header__time-block">
            <p className={`header__number ${isRunningOut ? 'header__number_over' : ''}`}>
              {String(seconds).padStart(2, '0')}
            </p>
            <p className="header__time-unit">секунд</p>
          </div>
          <div className="header__clock-dots">
            <div className={`header__clock-dot ${isRunningOut ? 'header__clock-dot_over' : ''}`} />
            <div className={`header__clock-dot ${isRunningOut ? 'header__clock-dot_over' : ''}`} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
