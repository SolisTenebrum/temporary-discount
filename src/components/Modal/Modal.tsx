import { useEffect, useState } from 'react';
import './Modal.css';

interface IModalCard {
  title: string;
  newPrice: string;
  oldPrice: string;
  discount: string;
  id: number;
  handleCardClick: (id: number) => void;
  activeCard: boolean;
}

const ModalCard = ({ title, newPrice, oldPrice, discount, id, handleCardClick, activeCard }: IModalCard) => {
  return (
    <div className={`modal__card ${activeCard && 'modal__card_active'}`} onClick={() => handleCardClick(id)}>
      <div className="modal__card-body">
        <div className="modal__card-top">
          <input className="modal__radio" type="radio" name="plan" />
          <p className="modal__card-title">{title}</p>
          <p className="modal__old-price">{oldPrice}</p>
        </div>
        <div className="modal__card-bottom">
          <p className="modal__new-price">{newPrice}</p>
          <div className="modal__discount-icon">
            <p className="modal__discount">{discount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ isOver }: { isOver: boolean }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleCardClick = (id: number) => {
    setActiveCard(id);
  };

  useEffect(() => {
    if (isOver) {
      setModalOpen(true);
    }
  }, [isOver]);

  const lastArray = [
    {
      title: '1 неделя',
      newPrice: '599₽',
      oldPrice: '999₽',
      discount: '-40%',
    },
    {
      title: '1 месяц',
      newPrice: '799₽',
      oldPrice: '1690₽',
      discount: '-50%',
    },
    {
      title: '3 месяца',
      newPrice: '1690₽',
      oldPrice: '5990₽',
      discount: '-60%',
    },
  ];

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
              {lastArray.map((card, index) => {
                return (
                  <ModalCard
                    key={card.title}
                    title={card.title}
                    newPrice={card.newPrice}
                    oldPrice={card.oldPrice}
                    discount={card.discount}
                    id={index}
                    handleCardClick={handleCardClick}
                    activeCard={activeCard === index}
                  />
                );
              })}
            </div>
          </div>
          <button className="modal__start-button">Начать тренироваться</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
