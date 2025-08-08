import Filter from '../filter';

const Table = () => {
  return (
    <div className='u-flex u-flex-col u-gap-lg'>
      <Filter />

      <div className='u-overflow-hidden u-border u-border-rounded-sm'>
        <div className='u-overflow-x-auto'>
          <table className='table u-w-full'>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>Column 5</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
                <td>Data 4</td>
                <td>Data 5</td>
              </tr>

              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
                <td>Data 4</td>
                <td>Data 5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
