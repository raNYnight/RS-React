/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import nextId from 'react-id-generator';
import isValidEmail from './form-validation/email-validation';
import isValidName from './form-validation/name-validation';
import { EmployeeData } from 'components/interfaces';
import Confirmation from './confirmation/confirmation';

const FormComponent = ({ onEmployeeAdd }: { onEmployeeAdd: (employee: EmployeeData) => void }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    getValues,
  } = useForm<EmployeeData>();

  const [imageUrl, setImageUrl] = useState('');
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const onSubmit = (data: EmployeeData) => {
    const reader = new FileReader();
    reader.readAsDataURL(data.image[0] as Blob);
    reader.onload = () => {
      setImageUrl(reader.result as string);
      setIsConfirmationOpen(true);
    };
  };

  const handleConfirm = (data: EmployeeData, readerResult: string) => {
    onEmployeeAdd({ ...data, image: readerResult, id: +nextId().slice(2) });
    reset();
    setIsConfirmationOpen(false);
  };

  const handleCancel = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <form
      className="add-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      {isConfirmationOpen && (
        <Confirmation
          message="Do you want to add this employee?"
          onConfirm={() => handleConfirm(getValues(), imageUrl)}
          onCancel={handleCancel}
        />
      )}
      <div className="field-block">
        <label>Name:</label>
        <input
          type="text"
          {...register('name', { required: true, validate: (value) => isValidName(value) })}
        />
        {errors.name && <span>This field is required</span>}
      </div>
      <div className="field-block">
        <label>Email:</label>
        <input
          type="email"
          {...register('email', { required: true, validate: (value) => isValidEmail(value) })}
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div className="field-block">
        <label>Phone:</label>
        <input
          type="number"
          {...register('phone', { required: true, validate: (value: string) => value.length > 8 })}
        />
        {errors.phone && <span>This field is required</span>}
      </div>
      <div className="field-block">
        <label>Work Type:</label>
        <label>
          On-site
          <input
            type="radio"
            {...register('worktype', { required: true })}
            value="On-site"
          />
        </label>
        <label>
          Remote
          <input
            type="radio"
            {...register('worktype', { required: true })}
            value="Remote"
          />
        </label>
        {errors.worktype && <span>This field is required</span>}
      </div>
      <div className="field-block">
        <label>
          Promotion:
          <input
            type="checkbox"
            {...register('promotion')}
          />
        </label>
      </div>
      <div className="field-block">
        <label>Title:</label>
        <select
          defaultValue=""
          {...register('title', { required: true })}
        >
          <option
            value=""
            disabled
          >
            Select title
          </option>
          <option value="Developer">Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
        </select>
        {errors.title && <span>This field is required</span>}
      </div>
      <div className="field-block">
        <label>Work since:</label>
        <input
          type="date"
          {...register('date', { required: true })}
        />
        {errors.date && <span>This field is required</span>}
      </div>
      <div className="field-block">
        <label>Salary:</label>
        <input
          type="number"
          {...register('salary', {
            required: true,
          })}
        />
        {errors.salary && errors.salary.type === 'required' && <span>This field is required</span>}
      </div>
      <div className="field-block">
        <label>Profile image:</label>
        <input
          type="file"
          accept="image/*"
          {...register('image', {
            required: true,
            onChange: (e) => {
              if (e.target.files) {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = () => {
                  setImageUrl(reader.result as string);
                };
              }
            },
          })}
        />
        {errors.image && <span>Upload image file</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
