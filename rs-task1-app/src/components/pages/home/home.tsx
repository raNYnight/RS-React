import AppFilter from '../../elements/app-filter/app-filter';
import data from '../../app/data';
import EmployeesList from '../../elements/employees-list/employees-list';
import SearchPanel from '../../elements/search-panel/search-panel';
import { Component, ReactNode } from 'react';
import { HomeProps, HomeState } from '../../interfaces';

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    const storedData = localStorage.getItem('homeData');
    this.state = {
      data: storedData ? JSON.parse(storedData) : [...data],
    };
  }

  deleteItem = (id: number) => {
    this.setState(({ data }) => {
      const newData = data.filter((item) => item.id !== id);
      localStorage.setItem('homeData', JSON.stringify(newData));
      return {
        data: newData,
      };
    });
  };

  componentWillUnmount() {
    localStorage.setItem('homeData', JSON.stringify(this.state.data));
  }

  render(): ReactNode {
    return (
      <div id="Home">
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          onDelete={this.deleteItem}
          edata={this.state.data}
        />
      </div>
    );
  }
}
export default Home;
