import { EmployeesAddingProps, EmployeesAddingState } from 'components/interfaces';
import React, { createRef, FormEvent } from 'react';
import { Component, ReactNode } from 'react';
import nextId from 'react-id-generator';
import './adding-page.css';
import FormDate from './form-components/form-date';
import FormEmail from './form-components/form-email';
import FormWorkTypeSwitcher from './form-components/form-work-status';
import ImageUploader from './form-components/form-image-uploader';
import FormName from './form-components/form-name';
import FormPhone from './form-components/form-phone';
import FormPromotion from './form-components/form-promotion';
import FormSalary from './form-components/form-salary';
import FormTitle from './form-components/form-title';
import isValidName from './form-validation/name-validation';
import isValidEmail from './form-validation/email-validation';
import EmployeesCard from '../../elements/employees-card/employees-card';

class EmployeesAddingFormPage extends Component<EmployeesAddingProps, EmployeesAddingState> {
  formRef: React.RefObject<HTMLFormElement>;

  formNameRef: React.RefObject<FormName>;

  formWorkTypeRef: React.RefObject<FormWorkTypeSwitcher>;

  formEmailRef: React.RefObject<FormEmail>;

  formPhoneRef: React.RefObject<FormPhone>;

  formTitleRef: React.RefObject<FormTitle>;

  formSalaryRef: React.RefObject<FormSalary>;

  formDateRef: React.RefObject<FormDate>;

  formPromotionRef: React.RefObject<FormPromotion>;

  formUploadtRef: React.RefObject<ImageUploader>;

  constructor(props: EmployeesAddingProps) {
    super(props);
    this.formNameRef = createRef();
    this.formWorkTypeRef = createRef();
    this.formEmailRef = createRef();
    this.formPhoneRef = createRef();
    this.formTitleRef = createRef();
    this.formSalaryRef = createRef();
    this.formDateRef = createRef();
    this.formPromotionRef = createRef();
    this.formUploadtRef = createRef();
    this.formRef = React.createRef();
    this.state = {
      employees: [],
      edata: {
        name: '',
        workType: '',
        email: '',
        phone: '',
        title: '',
        salary: '',
        date: '',
        promotion: false,
        imageURL: '',
        id: +nextId().slice(2),
      },
      errors: {
        name: '',
        workType: '',
        email: '',
        phone: '',
        title: '',
        salary: '',
        date: '',
        imageURL: '',
      },
    };
  }

  handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      edata: {
        ...this.state.edata,
        name: event.target.value,
      },
      errors: {
        ...this.state.errors,
        name: isValidName(event.target.value) ? '' : 'Invalid name',
      },
    });
  };

  handleWorkTypeChange = (newWorkType: string) => {
    this.setState({
      edata: {
        ...this.state.edata,
        workType: newWorkType,
      },
    });
    console.log(this.state.edata);
  };

  handleUpload = (url: string) => {
    this.setState({
      edata: {
        ...this.state.edata,
        imageURL: url,
      },
    });
  };

  setEdataState = async () =>
    this.setState({
      edata: {
        ...this.state.edata,
        name: this.formNameRef.current?.nameInputRef.current?.value ?? '',
        workType: !this.state.edata.workType ? '' : this.state.edata.workType,
        email: this.formEmailRef.current?.emailInputRef.current?.value ?? '',
        phone: this.formPhoneRef.current?.phoneInputRef.current?.value ?? '',
        title: this.formTitleRef.current?.titleInputRef.current?.value ?? 'Select position',
        salary: this.formSalaryRef.current?.salaryInputRef.current?.value ?? '',
        date: this.formDateRef.current?.dateInputRef.current?.value ?? '',
        promotion: this.formPromotionRef.current?.promotionInputRef.current?.checked ? true : false,
        // imageURL: this.formUploadtRef.current?.uploadInputRef.current?.value ?? '',
        id: +nextId().slice(2),
      },
    });

  setErorrState = async () =>
    this.setState({
      errors: {
        name: isValidName(this.state.edata.name) ? '' : 'Invalid name',
        email: isValidEmail(this.state.edata.email) ? '' : 'Invalid email',
        workType: !this.state.edata.workType ? 'Select work type' : '',
        phone:
          this.state.edata.phone.length > 11 ? '' : 'Invalid phone (should be atleast 12 numbers)',
        salary: this.state.edata.salary.length > 0 ? '' : 'Invalid salary',
        title: this.state.edata.title === 'Select position' ? 'Select title' : '',
        date: this.state.edata.date ? '' : 'Select date',
        imageURL: this.state.edata.imageURL ? '' : 'Select image',
      },
    });

  resetForm = () => {
    this.setState({
      edata: {
        name: '',
        workType: '',
        email: '',
        phone: '',
        title: '',
        salary: '',
        date: '',
        promotion: false,
        imageURL: '',
        id: +nextId().slice(2),
      },
      errors: {
        name: '',
        workType: '',
        email: '',
        phone: '',
        title: '',
        salary: '',
        date: '',
        imageURL: '',
      },
    });
    this.formRef.current?.reset();
  };

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await this.setEdataState();
    await this.setErorrState();
    if (Object.values(this.state.errors).every((val) => val === '')) {
      this.resetForm();
      this.setState(
        (prevState) => ({
          employees: [...prevState.employees, this.state.edata],
        }),
        () => {
          localStorage.setItem('addedData', JSON.stringify(this.state.employees));
        }
      );
    }
  };

  deleteItem = (id: number) => {
    this.setState(({ employees }) => {
      const newData = employees.filter((item) => item.id !== id);
      localStorage.setItem('addedData', JSON.stringify(newData));
      return {
        employees: newData,
      };
    });
  };

  render(): ReactNode {
    const { workType } = this.state.edata;
    return (
      <div className="adding-page">
        <h2>Add new employee</h2>
        <form
          ref={this.formRef}
          action=""
          onSubmit={this.handleSubmit}
          className="add-form"
        >
          <FormName
            ref={this.formNameRef}
            error={this.state.errors.name}
          />
          <FormWorkTypeSwitcher
            ref={this.formWorkTypeRef}
            error={this.state.errors.workType}
            workType={workType}
            onChange={this.handleWorkTypeChange}
          />
          <FormEmail
            ref={this.formEmailRef}
            error={this.state.errors.email}
          />
          <FormPhone
            ref={this.formPhoneRef}
            error={this.state.errors.phone}
          />
          <FormTitle
            ref={this.formTitleRef}
            error={this.state.errors.title}
          />
          <FormSalary
            ref={this.formSalaryRef}
            error={this.state.errors.salary}
          />
          <FormDate
            ref={this.formDateRef}
            error={this.state.errors.date}
          />
          <FormPromotion ref={this.formPromotionRef} />
          <ImageUploader
            onUpload={this.handleUpload}
            ref={this.formUploadtRef}
            error={this.state.errors.imageURL}
          />
          <button
            type="submit"
            className="btn form-submit-btn"
          >
            Add new employee
          </button>
        </form>
        <div className="add-list">
          {this.state.employees.map((employee) => {
            const { id, ...itemProps } = employee;
            return (
              <EmployeesCard
                key={id}
                id={id}
                onDelete={() => this.deleteItem(id)}
                {...itemProps}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default EmployeesAddingFormPage;
