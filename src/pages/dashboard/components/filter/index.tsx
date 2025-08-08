interface FilterProps {
  filters: {
    searchTerm: string;
    city: string;
    network: string;
    status: string;
  };
  onFilterChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  onClearFilters: () => void;
}

const Filter = ({ filters, onFilterChange, onClearFilters }: FilterProps) => {
  return (
    <div className='filter'>
      <form className='filter__form'>
        <div className='filter__group u-flex-1'>
          <label htmlFor='search'>Search Towers</label>

          <input
            id='search'
            name='searchTerm'
            type='text'
            placeholder='Search by tower name...'
            className='filter__input'
            value={filters.searchTerm}
            onChange={(e) => onFilterChange(e)}
          />
        </div>

        <div className='filter__group'>
          <label htmlFor='city'>Filter By City</label>

          <select
            id='city'
            name='city'
            className='filter__select u-cursor-pointer'
            value={filters.city}
            onChange={(e) => onFilterChange(e)}
          >
            <option value='all'>All</option>
            <option value='cairo'>Cairo</option>
            <option value='alex'>Alex</option>
            <option value='hurghada'>Hurghada</option>
            <option value='luxor'>Luxor</option>
          </select>
        </div>

        <div className='filter__group'>
          <label htmlFor='network'>Filter By Network</label>

          <select
            id='network'
            name='network'
            className='filter__select u-cursor-pointer'
            value={filters.network}
            onChange={(e) => onFilterChange(e)}
          >
            <option value='all'>All</option>
            <option value='4G'>4G</option>
            <option value='5G'>5G</option>
          </select>
        </div>

        <div className='filter__group'>
          <label htmlFor='status'>Filter By Status</label>

          <select
            id='status'
            name='status'
            className='filter__select u-cursor-pointer'
            value={filters.status}
            onChange={(e) => onFilterChange(e)}
          >
            <option value='all'>All</option>
            <option value='active'>Active</option>
            <option value='offline'>Offline</option>
          </select>
        </div>

        <button
          type='button'
          className='filter__clear'
          onClick={onClearFilters}
        >
          Clear Filters
        </button>
      </form>
    </div>
  );
};

export default Filter;
