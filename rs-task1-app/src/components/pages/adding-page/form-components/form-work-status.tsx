import { WorkTypeSwitcherProps } from 'components/interfaces';
import React, { Component, createRef } from 'react';

class FormWorkTypeSwitcher extends Component<WorkTypeSwitcherProps> {
  onSiteInputRef: React.RefObject<HTMLInputElement>;

  remoteInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: WorkTypeSwitcherProps) {
    super(props);
    this.onSiteInputRef = createRef();
    this.remoteInputRef = createRef();
  }

  handleSiteClick = () => {
    this.props.onChange('On-site');
  };

  handleRemoteClick = () => {
    this.props.onChange('Remote');
  };

  render() {
    const { workType, error } = this.props;
    return (
      <div className="field-block ">
        <label className="label-block">Employee work type</label>
        <label className="work-type-label">
          <input
            ref={this.onSiteInputRef}
            type="radio"
            name="workType"
            value="On-site"
            checked={workType === 'On-site'}
            onChange={this.handleSiteClick}
            className="work-type-label-input"
          />
          On-site
        </label>
        <label className="work-type-label-label">
          <input
            ref={this.remoteInputRef}
            type="radio"
            name="workType"
            value="Remote"
            checked={workType === 'Remote'}
            onChange={this.handleRemoteClick}
            className="work-type-label-input"
          />
          Remote
        </label>
        {error && <span className="error">{error}</span>}
      </div>
    );
  }
}

export default FormWorkTypeSwitcher;
