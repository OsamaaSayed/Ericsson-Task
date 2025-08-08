import { useState, useEffect } from 'react';

import SummaryCardList from './components/summary-card-list';
import BarChart from './components/bar-chart';
import PieChart from './components/pie-chart';
import Table from './components/table';
import Filter from './components/filter';

import { sleep } from '../../utils';
import { cellTowers } from '../../constants';

const initialFilterState = {
  searchTerm: '',
  city: 'all',
  network: 'all',
  status: 'all',
};

const Dashboard = () => {
  const [filters, setFilters] = useState(initialFilterState);
  const [isLoading, setIsLoading] = useState(true);

  const filteredTowers = cellTowers.filter((tower) => {
    const matchesSearchTerm = tower.name
      .toLowerCase()
      .includes(filters.searchTerm.toLowerCase());

    const matchesCity =
      filters.city === 'all' ||
      tower.city.toLowerCase() === filters.city.toLowerCase();

    const matchesNetwork =
      filters.network === 'all' ||
      tower.networkType.toLowerCase() === filters.network.toLowerCase();

    const matchesStatus =
      filters.status === 'all' ||
      tower.status.toLowerCase() === filters.status.toLowerCase();

    return matchesSearchTerm && matchesCity && matchesNetwork && matchesStatus;
  });

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilters(initialFilterState);
  };

  useEffect(() => {
    const loadData = async () => {
      await sleep(3000);
      setIsLoading(false);
    };

    loadData();
  }, []);

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
