import { Component, createRef, ReactNode } from 'react';
interface FormPhoneProps {
  error: string;
}
class FormPhone extends Component<FormPhoneProps> {
  phoneInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: FormPhoneProps) {
    super(props);
    this.phoneInputRef = createRef();
  }

  render(): ReactNode {
    const { error } = this.props;
    return (
      <div className="field-block phone-block">
        <label
          htmlFor="phone"
          className="label-block"
        >
          Enter employee phone
        </label>
        <input
          ref={this.phoneInputRef}
          type="number"
          id="phone"
          placeholder="employee phone number"
        />
        {error && <span className="error">{error}</span>}
      </div>
    );
  }
}

export default FormPhone;
