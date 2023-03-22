const FormSalary = () => (
  <div className="field-block salary-block">
    <label
      htmlFor="salary"
      className="label-block"
    >
      Enter employee salary (in $)
    </label>
    <input
      type="number"
      id="salary"
      placeholder="employee salary"
    />
  </div>
);

export default FormSalary;
