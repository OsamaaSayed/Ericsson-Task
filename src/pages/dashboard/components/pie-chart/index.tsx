import ChartSkeleton from '../chart-skeleton';
import { usePieChart } from '../../hooks/use-pie-chart';

import type { CellTower } from '../../../../types';

interface PieChartProps {
  cellTowers: CellTower[];
  isLoading: boolean;
}

const PieChart = ({ cellTowers, isLoading }: PieChartProps) => {
  const { svgRef } = usePieChart(cellTowers, isLoading);

  if (isLoading) {
    return <ChartSkeleton />;
  }

  return (
    <div className='chart u-border u-border-rounded-md u-flex-1 u-box-shadow'>
      <h3 className='chart__title'>Status Distribution</h3>

      <div className='chart__content'>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default PieChart;
