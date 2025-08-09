import ChartSkeleton from '../chart-skeleton';
import { useBarChart } from '../../hooks/use-bar-chart';

import type { CellTower } from '../../../../types';

interface BarChartProps {
  cellTowers: CellTower[];
  isLoading: boolean;
}

const BarChart = ({ cellTowers, isLoading }: BarChartProps) => {
  const { svgRef } = useBarChart(cellTowers, isLoading);

  if (isLoading) {
    return <ChartSkeleton />;
  }

  return (
    <div className='chart u-border u-border-rounded-md u-flex-1 u-box-shadow'>
      <h3 className='chart__title'>Towers By City</h3>

      <div className='chart__content'>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default BarChart;
