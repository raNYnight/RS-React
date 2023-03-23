import { Component, createRef, ReactNode } from 'react';
interface FormSalaryProps {
  error: string;
}
class FormSalary extends Component<FormSalaryProps> {
  salaryInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormSalaryProps) {
    super(props);
    this.salaryInputRef = createRef();
  }

  render(): ReactNode {
    const { error } = this.props;
    return (
      <div className="field-block salary-block">
        <label
          htmlFor="salary"
          className="label-block"
        >
          Enter employee salary (in $)
        </label>
        <input
          ref={this.salaryInputRef}
          type="number"
          id="salary"
          placeholder="employee salary"
        />
        {error && <span className="error">{error}</span>}
      </div>
    );
  }
}

export default FormSalary;
