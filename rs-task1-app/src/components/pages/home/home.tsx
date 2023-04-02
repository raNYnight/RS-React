import { useEffect, useState } from 'react';
import AppFilter from '../../elements/app-filter/app-filter';
import defaultData from '../../app/data';
import EmployeesList from '../../elements/employees-list/employees-list';
import SearchPanel from '../../elements/search-panel/search-panel';
import { EmployeeData } from '../../interfaces';

function Home() {
  const [data, setData] = useState<EmployeeData[]>([]);

  useEffect(() => {
    const homeData = localStorage.getItem('homeData');
    const addedData = localStorage.getItem('addedData');

    if (homeData) {
      const parsedData = JSON.parse(homeData);

      if (addedData) {
        const parsedAddedData = JSON.parse(addedData);
        parsedData.push(...parsedAddedData);
        localStorage.setItem('homeData', JSON.stringify(parsedData));
        localStorage.removeItem('addedData');
      }

      setData(parsedData);
    } else {
      setData(defaultData);
      localStorage.setItem('homeData', JSON.stringify(defaultData));
    }
  }, []);

  const deleteItem = (id: number) => {
    setData((prevData) => {
      const newData = prevData.filter((item) => item.id !== id);
      localStorage.setItem('homeData', JSON.stringify(newData));
      return newData;
    });
  };

  return (
    <div id="Home">
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList
        onDelete={deleteItem}
        edata={data}
      />
    </div>
  );
}

export default Home;
