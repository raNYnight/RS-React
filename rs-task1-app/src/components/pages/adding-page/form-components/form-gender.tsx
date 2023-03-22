import { GenderSwitcherProps } from 'components/interfaces';
import React, { Component } from 'react';

class FormGenderSwitcher extends Component<GenderSwitcherProps> {
  constructor(props: GenderSwitcherProps) {
    super(props);
  }

  handleMaleClick = () => {
    this.props.onChange('male');
  };

  handleFemaleClick = () => {
    this.props.onChange('female');
  };

  render() {
    const { gender } = this.props;

    return (
      <div className="field-block ">
        <label className="label-block">Choose employee gender</label>
        <label className="gender-label">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={this.handleMaleClick}
            className="gender-input"
          />
          Male
        </label>
        <label className="gender-label">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={this.handleFemaleClick}
            className="gender-input"
          />
          Female
        </label>
      </div>
    );
  }
}

export default FormGenderSwitcher;
