import { EmployersAddingProps, EmployersAddingState } from 'components/interfaces';
import { Component, ReactNode } from 'react';
import './adding-page.css';
import FormDate from './form-components/form-date';
import FormEmail from './form-components/form-email';
import FormGenderSwitcher from './form-components/form-gender';
import ImageUploader from './form-components/form-image-uploader';
import FormName from './form-components/form-name';
import FormPhone from './form-components/form-phone';
import FormPromotion from './form-components/form-promotion';
import FormSalary from './form-components/form-salary';
import FormTitle from './form-components/form-title';

class EmployersAddingPage extends Component<EmployersAddingProps, EmployersAddingState> {
  constructor(props: EmployersAddingProps) {
    super(props);
    this.state = {
      gender: 'male',
    };
  }

  handleGenderChange = (newGender: string) => {
    this.setState({
      gender: newGender,
    });
  };

  handleUpload = (file: File) => {
    // Do something with the uploaded file here
    console.log(file);
  };

  render(): ReactNode {
    const { gender } = this.state;
    return (
      <div className="adding-page">
        <h2>Add new employee</h2>
        <form
          action=""
          className="add-form"
        >
          <FormName />
          <FormGenderSwitcher
            gender={gender}
            onChange={this.handleGenderChange}
          />
          <FormEmail />
          <FormPhone />
          <FormTitle />
          <FormSalary />
          <FormDate />
          <FormPromotion />
          <ImageUploader onUpload={this.handleUpload} />
          <button
            type="submit"
            className="btn form-submit-btn"
          >
            Add new employee
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddingPage;
