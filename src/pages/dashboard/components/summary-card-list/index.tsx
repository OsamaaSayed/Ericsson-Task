import { useState, useEffect } from 'react';

import SummaryCard from '../summary-card';
import SummaryCardSkeleton from '../summary-card-skeleton';
import TowerIcon from '../../../../components/shared/icons/tower';
import ActiveTowerIcon from '../../../../components/shared/icons/active-tower';
import SignalIcon from '../../../../components/shared/icons/signal';

import { sleep } from '../../../../utils';

import type { CellTower } from '../../../../types';

interface SummaryCardListProps {
  cellTowers: CellTower[];
}

const SummaryCardList = ({ cellTowers }: SummaryCardListProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const totalTowers = cellTowers.length;
  const activeTowers = cellTowers.filter(
    (tower) => tower.status === 'Active',
  ).length;
  const averageSignal =
    cellTowers.reduce((acc, tower) => acc + tower.signalStrength, 0) /
    totalTowers;

  useEffect(() => {
    const loadData = async () => {
      await sleep(3000);
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className='summary-card-list'>
        <SummaryCardSkeleton />
        <SummaryCardSkeleton />
        <SummaryCardSkeleton />
      </div>
    );
  }

  return (
    <div className='summary-card-list'>
      <SummaryCard
        value={totalTowers}
        description='Total Towers'
        icon={<TowerIcon className='u-mx-auto' />}
      />
      <SummaryCard
        value={activeTowers}
        description='Active Towers'
        icon={<ActiveTowerIcon className='u-mx-auto' />}
      />
      <SummaryCard
        value={+averageSignal.toFixed(2)}
        description='Average Signals'
        icon={<SignalIcon className='u-mx-auto' />}
      />
    </div>
  );
};

export default SummaryCardList;
