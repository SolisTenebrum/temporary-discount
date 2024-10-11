'use client'

import { useEffect, useState, memo } from 'react';
import './../styles/Modal.css';
import { IPlan } from '@/types/types';
import { discounts } from '@/utils/constants';
import ModalCard from './ModalCard';

const Modal = memo(
  ({ isOver, popupPrices, oldPrices }: { isOver: boolean; popupPrices: IPlan[]; oldPrices: IPlan[] }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handleRadioChange = (plan: string | null) => {
      setSelectedPlan(plan);
    };

    const handleModalClose = () => {
      setModalOpen(false);
    };

    const handleCardClick = (id: string, title: string) => {
      setActiveCard(parseInt(id));
      setSelectedPlan(title);
    };

    useEffect(() => {
      if (isOver) {
        setModalOpen(true);
      }
    }, [isOver]);

    const combinedPrices = popupPrices.map((newPriceItem, index) => {
      const oldPriceItem = oldPrices[index];
      const discount = discounts[index].discount;
      return {
        title: newPriceItem.name,
        newPrice: newPriceItem.price,
        oldPrice: oldPriceItem ? oldPriceItem.price : 0,
        id: newPriceItem.id,
        discount: discount,
      };
    });

    return (
      <div className={`modal ${isModalOpen ? 'modal_opened' : 'modal_closed'} ${isOver && 'modal_opened'}`}>
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
                {combinedPrices.map((card, index) => {
                  return (
                    <ModalCard
                      key={card.title}
                      title={card.title}
                      newPrice={card.newPrice}
                      oldPrice={card.oldPrice}
                      discount={card.discount}
                      id={card.id}
                      onCardClick={handleCardClick}
                      activeCard={activeCard === index}
                      onRadioChange={handleRadioChange}
                      selectedPlan={selectedPlan}
                      isOver={isOver}
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
  }
);

Modal.displayName = 'Modal';

export default Modal;
