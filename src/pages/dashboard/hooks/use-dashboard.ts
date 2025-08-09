import { useState, useEffect } from 'react';

import { sleep } from '../../../utils';
import { cellTowers } from '../../../constants';

export interface FilterState {
  searchTerm: string;
  city: string;
  network: string;
  status: string;
}

const initialFilterState: FilterState = {
  searchTerm: '',
  city: 'all',
  network: 'all',
  status: 'all',
};

export function useDashboard() {
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
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

  return {
    filters,
    isLoading,
    filteredTowers,
    handleFilterChange,
    clearFilters,
  };
}
