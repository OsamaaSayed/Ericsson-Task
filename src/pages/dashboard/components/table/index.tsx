import TableSkeleton from '../table-skeleton';

import type { CellTower } from '../../../../types';

interface TableProps {
  cellTowers: CellTower[];
  isLoading: boolean;
}

const Table = ({ cellTowers, isLoading }: TableProps) => {
  if (isLoading) {
    return <TableSkeleton />;
  }

  return (
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
            {cellTowers.map((tower, index) => (
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

        {cellTowers.length === 0 && (
          <p className='table__cell-empty'>No towers found</p>
        )}
      </div>
    </div>
  );
};

export default Table;
