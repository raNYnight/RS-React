import { Component, createRef, ReactNode } from 'react';
interface FormEmailProps {
  error: string;
}
class FormEmail extends Component<FormEmailProps> {
  emailInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormEmailProps) {
    super(props);
    this.emailInputRef = createRef();
  }

  render(): ReactNode {
    const { error } = this.props;
    return (
      <div className="field-block email-block">
        <label
          htmlFor="email"
          className="label-block"
        >
          Enter employee email
        </label>
        <input
          ref={this.emailInputRef}
          type="email"
          id="email"
          placeholder="employee email"
        />
        {error && <span className="error">{error}</span>}
      </div>
    );
  }
}

export default FormEmail;
