'use client'

import { useState } from 'react';
import './../styles/ChoosePlan.css';
import { IPlan } from '@/types/types';
import { descriptions } from '@/utils/constants';
import PlanCard from './PlanCard';
import Image from 'next/image';

const ChoosePlan = ({ isOver, newPrices, oldPrices }: { isOver: boolean; newPrices: IPlan[]; oldPrices: IPlan[] }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard(id);
  };

  const combinedPrices = newPrices.map((newPriceItem, index) => {
    const oldPriceItem = oldPrices[index];
    const description = descriptions[index].description;
    const discount = descriptions[index].discount;
    return {
      title: newPriceItem.name,
      newPrice: newPriceItem.price,
      oldPrice: oldPriceItem ? oldPriceItem.price : null,
      id: newPriceItem.id,
      description: description,
      discount: discount,
    };
  });

  return (
    <section className="choose-plan">
      <div className="choose-plan__container">
        <h1 className="choose-plan__title">Выберите подходящий тарифный план</h1>
        <div className="choose-plan__content">
          <div className="choose-plan__image-container">
            <Image src='/assets/a_man.png' alt="A standing man" className="choose-plan__image" width={434} height={715} priority/>
            <div className="choose-plan__image-background" />
          </div>
          <div className="choose-plan__plans">
            <div className="choose-plan__cards-container">
              {combinedPrices.map((card: any) => {
                return (
                  <PlanCard
                    key={card.id}
                    title={card.title}
                    newPrice={card.newPrice}
                    oldPrice={card.oldPrice}
                    description={card.description}
                    discount={card.discount}
                    isOver={isOver}
                    id={card.id}
                    onCardClick={handleCardClick}
                    activeCard={activeCard === card.id}
                  />
                );
              })}
            </div>
            <div className="choose-plan__buy">
              <p className="choose-plan__buy-text">
                Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1 месяц
              </p>
              <div className="choose-plan__agreement">
                <input className="choose-plan__agreement-checkbox" type="checkbox" id="agreement" defaultChecked/>
                <label className="choose-plan__agreement-text" htmlFor="agreement">
                  Я соглашаюсь с{' '}
                  <a href="#" className="choose-plan__agreement-link">
                    Правилами сервиса
                  </a>{' '}
                  и условиями{' '}
                  <a href="#" className="choose-plan__agreement-link">
                    Публичной оферты.
                  </a>
                </label>
              </div>
              <button className="choose-plan__buy-button">Купить</button>
              <div className="choose-plan__subtext">
                Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств по истечению
                купленного периода. Дальнейшие списания по тарифам участвующим в акции осуществляются по полной
                стоимости согласно оферте.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;
