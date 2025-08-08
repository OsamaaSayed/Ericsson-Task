const TableSkeleton = () => {
  const skeletonRows = Array.from({ length: 5 }, (_, index) => (
    <tr
      key={index}
      className='table-skeleton__row'
    >
      <td className='table-skeleton__cell'>
        <div className='table-skeleton__skeleton table-skeleton__skeleton--number'></div>
      </td>
      <td className='table-skeleton__cell'>
        <div className='table-skeleton__skeleton table-skeleton__skeleton--name'></div>
      </td>
      <td className='table-skeleton__cell'>
        <div className='table-skeleton__skeleton table-skeleton__skeleton--city'></div>
      </td>
      <td className='table-skeleton__cell'>
        <div className='table-skeleton__skeleton table-skeleton__skeleton--badge'></div>
      </td>
      <td className='table-skeleton__cell'>
        <div className='table-skeleton__skeleton table-skeleton__skeleton--badge'></div>
      </td>
      <td className='table-skeleton__cell'>
        <div className='table-skeleton__skeleton table-skeleton__skeleton--signal'></div>
      </td>
    </tr>
  ));

  return (
    <div className='u-overflow-hidden u-border u-border-rounded-md'>
      <div className='u-overflow-x-auto'>
        <table className='table-skeleton u-w-full'>
          <thead>
            <tr>
              <th className='table-skeleton__cell table-skeleton__cell--header'>
                <div className='table-skeleton__skeleton table-skeleton__skeleton--header'></div>
              </th>
              <th className='table-skeleton__cell table-skeleton__cell--header'>
                <div className='table-skeleton__skeleton table-skeleton__skeleton--header'></div>
              </th>
              <th className='table-skeleton__cell table-skeleton__cell--header'>
                <div className='table-skeleton__skeleton table-skeleton__skeleton--header'></div>
              </th>
              <th className='table-skeleton__cell table-skeleton__cell--header'>
                <div className='table-skeleton__skeleton table-skeleton__skeleton--header'></div>
              </th>
              <th className='table-skeleton__cell table-skeleton__cell--header'>
                <div className='table-skeleton__skeleton table-skeleton__skeleton--header'></div>
              </th>
              <th className='table-skeleton__cell table-skeleton__cell--header'>
                <div className='table-skeleton__skeleton table-skeleton__skeleton--header'></div>
              </th>
            </tr>
          </thead>

          <tbody>{skeletonRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSkeleton;
