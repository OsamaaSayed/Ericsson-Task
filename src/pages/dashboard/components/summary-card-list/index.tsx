import SummaryCard from '../summary-card';

import type { CellTower } from '../../../../types';

interface SummaryCardListProps {
  cellTowers: CellTower[];
}

const SummaryCardList = ({ cellTowers }: SummaryCardListProps) => {
  const totalTowers = cellTowers.length;
  const activeTowers = cellTowers.filter(
    (tower) => tower.status === 'Active',
  ).length;
  const averageSignal =
    cellTowers.reduce((acc, tower) => acc + tower.signalStrength, 0) /
    totalTowers;

  return (
    <div className='summary-card-list'>
      <SummaryCard
        value={totalTowers}
        description='Total Towers'
      />
      <SummaryCard
        value={activeTowers}
        description='Active Towers'
      />
      <SummaryCard
        value={+averageSignal.toFixed(2)}
        description='Average Signals'
      />
    </div>
  );
};

export default SummaryCardList;
