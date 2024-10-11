interface IPlanCard {
  id: string;
  title: string;
  newPrice: number;
  oldPrice: number;
  description?: string;
  discount?: string;
  isOver: boolean;
  activeCard: boolean;
  onCardClick: (id: string) => void;
}

interface IModalCard {
  id: number;
  title: string;
  newPrice: number;
  oldPrice: number;
  discount: string;
  activeCard: boolean;
  selectedPlan: string | null;
  onCardClick: (id: string, title: string) => void;
  onRadioChange: (plan: string) => void;
  isOver: boolean;
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
