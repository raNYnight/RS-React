import './search-panel.css';
import { useState, useEffect } from 'react';

const SearchPanel = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const storedValue = window.localStorage.getItem('my-input-value');
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    window.localStorage.setItem('my-input-value', inputValue);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className="form-control search-input"
        placeholder="Find employee"
      />
    </div>
  );
};

export default SearchPanel;
