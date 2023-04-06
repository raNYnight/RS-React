import AppFilter from '../../elements/app-filter/app-filter';
import CharList from '../../elements/char-list/char-list';
import SearchPanel from '../../elements/search-panel/search-panel';
import { useState } from 'react';

const NewHome = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };
  const storedSearch = window.localStorage.getItem('my-input-value');
  return (
    <div id="Home">
      <div className="search-panel">
        <SearchPanel onSearch={handleSearch} />
        <AppFilter />
      </div>
      <CharList searchValue={storedSearch ? storedSearch : searchValue} />
    </div>
  );
};

export default NewHome;
