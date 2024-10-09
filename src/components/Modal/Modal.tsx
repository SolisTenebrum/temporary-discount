import { useEffect, useState } from 'react';
import './Modal.css';

const ModalCard = () => {
  return (
    <div className="modal__card">
      <div className="modal__card-body">
        <div className="modal__card-top">
          <input className="modal__radio" type="radio" name="plan" />
          <p className="modal__card-title">1 неделя</p>
          <p className="modal__old-price">999₽</p>
        </div>
        <div className="modal__card-bottom">
          <p className="modal__new-price">599₽</p>
          <div className="modal__discount-icon">
            <p className="modal__discount">-40%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ isOver }: { isOver: boolean }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isOver) {
      setModalOpen(true);
    }
  }, [isOver]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className={`modal ${!isModalOpen && 'modal_closed'} ${isOver && 'modal_opened'}`}>
      <div className="modal__container">
        <div className="modal__close" onClick={handleModalClose} />
        <div className="modal__hot-offer">
          <p className="modal__hot-offer-text">горящее предложение</p>
        </div>
        <div className="modal__body">
          <div className="modal__top">
            <p className="modal__title">
              Не упусти свой <span className="modal__title-span">последний шанс</span>
            </p>
            <p className="modal__text">
              Мы знаем, как трудно начать.. <span className="modal__text-span">Поэтому!</span>
            </p>
            <p className="modal__text-circled">
              Дарим скидку для <span className="modal__text-circled-span">лёгкого старта</span>🏃‍♂
            </p>
          </div>
          <div className="modal__bottom">
            <p className="modal__text">Посмотри, что мы для тебя приготовили 🔥</p>
            <div className="modal__cards">
              <ModalCard />
              <ModalCard />
              <ModalCard />
            </div>
          </div>
          <button className="modal__start-button">Начать тренироваться</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
