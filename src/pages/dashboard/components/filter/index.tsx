import CircleXIcon from '../../../../components/shared/icons/circle-x';
import FilterIcon from '../../../../components/shared/icons/filter';
import SearchIcon from '../../../../components/shared/icons/search';

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

          <div className='u-relative'>
            <input
              id='search'
              name='searchTerm'
              type='text'
              placeholder='Search by tower name...'
              className='filter__input'
              value={filters.searchTerm}
              onChange={(e) => onFilterChange(e)}
            />
            <SearchIcon className='u-absolute u-top-1/2 u-left-6' />
          </div>
        </div>

        <div className='filter__elements'>
          <div className='filter__group'>
            <div className='u-flex u-items-center u-gap-sm'>
              <FilterIcon />
              <label htmlFor='city'>Filter By City</label>
            </div>

            <select
              id='city'
              name='city'
              className='filter__select u-cursor-pointer'
              value={filters.city}
              onChange={(e) => onFilterChange(e)}
            >
              <option value='all'>All</option>
              <option value='cairo'>Cairo</option>
              <option value='alexandria'>Alexandria</option>
              <option value='hurghada'>Hurghada</option>
              <option value='luxor'>Luxor</option>
            </select>
          </div>

          <div className='filter__group'>
            <div className='u-flex u-items-center u-gap-sm'>
              <FilterIcon />
              <label htmlFor='network'>Filter By Network</label>
            </div>

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
            <div className='u-flex u-items-center u-gap-sm'>
              <FilterIcon />
              <label htmlFor='status'>Filter By Status</label>
            </div>

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
            className='filter__clear u-flex u-items-center u-gap-xs'
            onClick={onClearFilters}
          >
            <CircleXIcon />
            Clear Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
