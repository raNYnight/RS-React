import AppFilter from '../../elements/app-filter/app-filter';
import data from '../../app/data';
import EmployeesList from '../../elements/employees-list/employees-list';
import SearchPanel from '../../elements/search-panel/search-panel';
import { Component, ReactNode } from 'react';
import { HomeProps, HomeState } from '../../interfaces';

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    const homeData = localStorage.getItem('homeData');
    const addedData = localStorage.getItem('addedData');
    this.state = {
      data: [...data],
    };
    if (homeData) {
      const parsedData = JSON.parse(homeData);
      if (addedData) {
        const parsedAddedData = JSON.parse(addedData);
        parsedData.push(...parsedAddedData);
      }
      this.state = {
        data: parsedData,
      };
    } else if (addedData) {
      this.state = {
        data: JSON.parse(addedData),
      };
    }
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
    localStorage.removeItem('addedData');
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
