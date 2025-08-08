import Filter from '../filter';

import type { CellTower } from '../../../../types';

interface TableProps {
  cellTowers: CellTower[];
}

const Table = ({ cellTowers }: TableProps) => {
  return (
    <div className='u-flex u-flex-col u-gap-lg'>
      <Filter />

      <div className='u-overflow-hidden u-border u-border-rounded-sm'>
        <div className='u-overflow-x-auto'>
          <table className='table u-w-full'>
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Network Type</th>
                <th>Status</th>
                <th>Signal Strength</th>
              </tr>
            </thead>

            <tbody>
              {cellTowers.map((tower) => (
                <tr key={tower.id}>
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
        </div>
      </div>
    </div>
  );
};

export default Table;
