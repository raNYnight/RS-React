import './search-panel.css';
import { Component } from 'react';
import { SearchPanelProps, SearchPanelState } from 'components/interfaces';

class SearchPanel extends Component<object, SearchPanelState> {
  constructor(props: SearchPanelProps) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const storedValue = window.localStorage.getItem('my-input-value');
    if (storedValue) {
      this.setState({ value: storedValue });
    }
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    this.setState({ value: inputValue });
    window.localStorage.setItem('my-input-value', inputValue);
  }

  render = () => {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
          className="form-control search-input"
          placeholder="Find employee"
        />
      </div>
    );
  };
}
export default SearchPanel;
