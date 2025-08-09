import SummaryCardList from './components/summary-card-list';
import BarChart from './components/bar-chart';
import PieChart from './components/pie-chart';
import Table from './components/table';
import Filter from './components/filter';

import { useDashboard } from './hooks/use-dashboard';

const Dashboard = () => {
  const {
    filters,
    isLoading,
    filteredTowers,
    handleFilterChange,
    clearFilters,
  } = useDashboard();

  return (
    <section className='dashboard'>
      <div className='u-flex u-flex-col u-gap-xl'>
        <SummaryCardList
          cellTowers={filteredTowers}
          isLoading={isLoading}
        />

        <div className='dashboard__charts'>
          <BarChart
            cellTowers={filteredTowers}
            isLoading={isLoading}
          />
          <PieChart
            cellTowers={filteredTowers}
            isLoading={isLoading}
          />
        </div>

        <div className='u-flex u-flex-col u-gap-lg'>
          <Filter
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
          />
          <Table
            cellTowers={filteredTowers}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
