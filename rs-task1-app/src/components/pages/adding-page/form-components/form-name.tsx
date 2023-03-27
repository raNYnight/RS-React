import { Component, createRef } from 'react';

interface FormNameProps {
  error: string;
}
class FormName extends Component<FormNameProps> {
  nameInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormNameProps) {
    super(props);
    this.nameInputRef = createRef();
  }

  render() {
    const { error } = this.props;
    return (
      <div className="field-block name-block">
        <label
          htmlFor="empName"
          className="label-block"
        >
          Enter employee name
        </label>
        <input
          ref={this.nameInputRef}
          type="text"
          id="empName"
          placeholder="employee name"
        />
        {error && <span className="error">{error}</span>}
      </div>
    );
  }
}

export default FormName;
