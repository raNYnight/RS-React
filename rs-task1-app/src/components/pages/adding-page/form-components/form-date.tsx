import { Component, createRef, ReactNode } from 'react';
interface FormDateProps {
  error: string;
}
class FormDate extends Component<FormDateProps> {
  dateInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormDateProps) {
    super(props);
    this.dateInputRef = createRef();
  }

  render(): ReactNode {
    const { error } = this.props;
    return (
      <div className="field-block name-block">
        <label
          htmlFor="date-input"
          className="label-block"
        >
          Work / Will work since
        </label>
        <input
          ref={this.dateInputRef}
          type="date"
          id="date-input"
          name="date"
        />
        {error && <span className="error">{error}</span>}
      </div>
    );
  }
}

export default FormDate;
