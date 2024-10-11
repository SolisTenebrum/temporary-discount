import { memo } from 'react';
import ChoosePlan from './ChoosePlan';
import { IPlan } from '@/types/types';

const Main = memo(({ isOver, newPrices, oldPrices }: { isOver: boolean; newPrices: IPlan[]; oldPrices: IPlan[] }) => {
  return (
    <main>
      <ChoosePlan isOver={isOver} newPrices={newPrices} oldPrices={oldPrices} />
    </main>
  );
});

Main.displayName = 'Main';

export default Main;
