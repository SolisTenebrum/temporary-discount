import { IModalCard } from '../../types/types';
import './ModalCard.css';

const ModalCard = ({
  title,
  newPrice,
  oldPrice,
  discount,
  id,
  onCardClick,
  activeCard,
  onRadioChange,
  selectedPlan,
}: IModalCard) => {
  return (
    <div className={`modal__card ${activeCard && 'modal__card_active'}`} onClick={() => onCardClick(id, title)}>
      <div className="modal__card-body">
        <div className="modal__card-top">
          <label className="modal__radio-label" htmlFor={`radio-${id}`}>
            <input
              className="modal__radio-input"
              type="radio"
              name="plan"
              id={`radio-${id}`}
              checked={selectedPlan === title}
              onChange={() => onRadioChange(title)}
            />
            <div className="modal__radio" />
          </label>
          <p className="modal__card-title">{title}</p>
          <p className="modal__old-price">{oldPrice}₽</p>
        </div>
        <div className="modal__card-bottom">
          <p className="modal__new-price">{newPrice}₽</p>
          <div className="modal__discount-icon">
            <p className="modal__discount">{discount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
