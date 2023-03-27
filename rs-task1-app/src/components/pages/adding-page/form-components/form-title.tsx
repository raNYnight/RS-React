import { Component, createRef, ReactNode } from 'react';
interface FormTitleProps {
  error: string;
}
class FormTitle extends Component<FormTitleProps> {
  titleInputRef: React.RefObject<HTMLSelectElement>;

  constructor(props: FormTitleProps) {
    super(props);
    this.titleInputRef = createRef();
  }

  render(): ReactNode {
    const { error } = this.props;

    return (
      <div className="field-block title-block">
        <label
          htmlFor="title-select"
          className="label-block"
        >
          Select a developer team position:
        </label>
        <select
          ref={this.titleInputRef}
          id="title-select"
          className="title-select"
          defaultValue="Select position"
        >
          <option
            value="Select position"
            disabled
          >
            Select position
          </option>
          <option value="frontend-developer">Frontend Developer</option>
          <option value="backend-developer">Backend Developer</option>
          <option value="full-stack-developer">Full Stack Developer</option>
          <option value="mobile-developer">Mobile Developer</option>
          <option value="devops-engineer">DevOps Engineer</option>
          <option value="quality-assurance-engineer">Quality Assurance Engineer</option>
        </select>
        {error && <span className="error">{error}</span>}
      </div>
    );
  }
}

export default FormTitle;
