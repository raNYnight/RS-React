import './search-panel.css';
import { useState, useEffect } from 'react';

interface SearchPanelProps {
  onSearch: (value: string) => void;
}

const SearchPanel = (props: SearchPanelProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const storedValue = window.localStorage.getItem('my-input-value');
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      window.localStorage.setItem('my-input-value', value);
      props.onSearch(value);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="form-control search-input"
        placeholder="Find employee"
      />
    </div>
  );
};

export default SearchPanel;
