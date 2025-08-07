const Filter = () => {
  return (
    <div className='filter'>
      <form className='filter__form'>
        <div className='filter__group'>
          <label htmlFor='search'>Search Towers</label>

          <input
            id='search'
            type='text'
            placeholder='Search by tower name...'
            className='filter__input'
          />
        </div>

        <div className='filter__group'>
          <label htmlFor='city'>Filter By City</label>

          <select
            id='city'
            className='filter__select u-cursor-pointer'
          >
            <option value='all'>All</option>
            <option value='Cairo'>Cairo</option>
            <option value='Alex'>Alex</option>
            <option value='Hurghada'>Hurghada</option>
            <option value='Luxor'>Luxor</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filter;
