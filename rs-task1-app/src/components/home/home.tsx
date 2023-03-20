import AppFilter from '../app-filter/app-filter';
import data from '../app/data';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

function Home() {
  return (
    <div id="Home">
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList edata={data} />
    </div>
  );
}

export default Home;
