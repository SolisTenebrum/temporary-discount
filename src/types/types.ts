interface IPlanCard {
  id: number;
  title: string;
  newPrice: string;
  oldPrice: string;
  description?: string;
  discount?: string;
  isOver: boolean;
  activeCard: boolean;
  onCardClick: (id: number) => void;
}

interface IModalCard {
  id: number;
  title: string;
  newPrice: number;
  oldPrice: number;
  discount: string;
  activeCard: boolean;
  selectedPlan: string | null;
  onCardClick: (id: number, title: string) => void;
  onRadioChange: (plan: string) => void;
}

interface IPlan {
  creationDateTime: string;
  deleted: boolean;
  id: string;
  isDiscount: boolean;
  isEndless: boolean;
  isPopular: boolean;
  lengthInDays: number;
  name: string;
  nonDiscountId: null;
  ownerId: string;
  price: number;
  statusId: null;
}

export type { IModalCard, IPlanCard, IPlan };
