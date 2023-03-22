import { Component, ReactNode } from 'react';
import './adding-page.css';

export interface EmployersAddingProps {}
export interface EmployersAddingState {}

class EmployersAddingPage extends Component<EmployersAddingProps, EmployersAddingState> {
  constructor(props: EmployersAddingProps) {
    super(props);
    this.state = {};
  }
  render(): ReactNode {
    return (
      <div className="adding-page">
        <h2>Add new employee</h2>
        <form action="">
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default EmployersAddingPage;
