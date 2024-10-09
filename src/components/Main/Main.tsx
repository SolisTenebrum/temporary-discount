import './Main.css';
import manImg from '../../assets/a_man.png';
import { useState } from 'react';

interface IPlanCard {
  title: string;
  newPrice: string;
  oldPrice: string;
  description: string;
  discount: string;
  isOver: boolean;
  id: number;
  handleCardClick: (id: number) => void;
  activeCard: boolean;
}

const PlanCard = ({
  title,
  newPrice,
  oldPrice,
  description,
  discount,
  isOver,
  id,
  handleCardClick,
  activeCard,
}: IPlanCard) => {
  return (
    <div
      className={`choose-plan__card ${activeCard && 'choose-plan__card_active'}`}
      onClick={() => handleCardClick(id)}
    >
      <div className="choose-plan__card-body">
        <p className={`choose-plan__card-title ${isOver && 'choose-plan__title_over'}`}>{title}</p>
        <div className={`choose-plan__card-price ${isOver && 'choose-plan__card-price_over'}`}>
          <p className="choose-plan__card-new-price">{isOver ? oldPrice : newPrice}</p>
          <p className={`choose-plan__card-old-price ${isOver && 'invisible'}`}>{oldPrice}</p>
        </div>
        <p className="choose-plan__card-description">{description}</p>
        {!isOver && (
          <div className="choose-plan__discount-icon">
            <p className="choose-plan__discount">{discount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Main = ({ isOver }: { isOver: boolean }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard(id);
    console.log(activeCard);
  };

  const array = [
    {
      title: '1 неделя',
      newPrice: '699₽',
      oldPrice: '999₽',
      description: 'Чтобы просто начать 👍🏻',
      discount: '-30%',
    },
    {
      title: '1 месяц',
      newPrice: '999₽',
      oldPrice: '1690₽',
      description: 'Привести тело в порядок 💪🏻',
      discount: '-40%',
    },
    {
      title: '3 месяца',
      newPrice: '2990₽',
      oldPrice: '5990₽',
      description: 'Изменить образ жизни 🔥',
      discount: '-50%',
    },
    {
      title: 'НАВСЕГДА',
      newPrice: '5990₽',
      oldPrice: '18 990₽',
      description: 'Всегда быть в форме и поддерживать своё здоровье ⭐️',
      discount: '-70%',
    },
  ];

  return (
    <main>
      <section className="choose-plan">
        <div className="choose-plan__container">
          <h1 className="choose-plan__title">Выберите подходящий тарифный план</h1>
          <div className="choose-plan__content">
            <div className="choose-plan__image-container">
              <img src={manImg} alt="A standing man" className="choose-plan__image" />
              <div className="choose-plan__image-background" />
            </div>
            <div className="choose-plan__plans">
              <div className="choose-plan__cards-container">
                {array.map((card, index) => {
                  return (
                    <PlanCard
                      key={card.title}
                      title={card.title}
                      newPrice={card.newPrice}
                      oldPrice={card.oldPrice}
                      description={card.description}
                      discount={card.discount}
                      isOver={isOver}
                      id={index}
                      handleCardClick={handleCardClick}
                      activeCard={activeCard === index}
                    />
                  );
                })}
              </div>
              <div className="choose-plan__buy">
                <p className="choose-plan__buy-text">
                  Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1 месяц
                </p>
                <div className="choose-plan__agreement">
                  <input className="choose-plan__agreement-checkbox" type="checkbox" id="agreement" />
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
    </main>
  );
};

export default Main;
