import { IPlanCard } from '@/types/types';
import './../styles/PlanCard.css';

const PlanCard = ({
  title,
  newPrice,
  oldPrice,
  description,
  discount,
  isOver,
  id,
  onCardClick,
  activeCard,
}: IPlanCard) => {
  return (
    <div className={`choose-plan__card ${activeCard && 'choose-plan__card_active'}`} onClick={() => onCardClick(id)}>
      <div className="choose-plan__card-body">
        <p className={`choose-plan__card-title ${isOver && 'choose-plan__title_over'}`}>{title}</p>
        <div className={`choose-plan__card-price ${isOver && 'choose-plan__card-price_over'}`}>
          <p className="choose-plan__card-new-price">{isOver ? oldPrice : newPrice}₽</p>
          <p className={`choose-plan__card-old-price ${isOver && 'invisible'}`}>{oldPrice}₽</p>
        </div>
        <p className="choose-plan__card-description">{description}</p>
        <div className={`choose-plan__discount-icon ${isOver && 'choose-plan__discount-icon_over'}`}>
          <p className="choose-plan__discount">{discount}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
