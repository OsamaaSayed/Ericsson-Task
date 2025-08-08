import { useState } from 'react';

import Filter from '../filter';

import type { CellTower } from '../../../../types';

interface TableProps {
  cellTowers: CellTower[];
}

const initialState = {
  searchTerm: '',
  city: 'all',
  network: 'all',
  status: 'all',
};

const Table = ({ cellTowers }: TableProps) => {
  const [filters, setFilters] = useState(initialState);

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
    setFilters(initialState);
  };

  return (
    <div className='u-flex u-flex-col u-gap-lg'>
      <Filter
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={clearFilters}
      />

      <div className='u-overflow-hidden u-border u-border-rounded-md'>
        <div className='u-overflow-x-auto'>
          <table className='table u-w-full'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>City</th>
                <th>Network Type</th>
                <th>Status</th>
                <th>Signal Strength</th>
              </tr>
            </thead>

            <tbody>
              {filteredTowers.map((tower, index) => (
                <tr key={tower.id}>
                  <td>{index + 1}</td>

                  <td>{tower.name}</td>
                  <td>{tower.city}</td>

                  <td>
                    <span
                      className={`table__badge table__badge-${tower.networkType.toLowerCase()}`}
                    >
                      {tower.networkType}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`table__badge table__badge-${tower.status.toLowerCase()}`}
                    >
                      {tower.status}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`table__badge table__badge-signal${tower.signalStrength}`}
                    >
                      {tower.signalStrength}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredTowers.length === 0 && (
            <p className='table__cell-empty'>No towers found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
