const FormName = () => (
  <div className="field-block name-block">
    <label
      htmlFor="empName"
      className="label-block"
    >
      Enter employee name
    </label>
    <input
      type="text"
      id="empName"
      placeholder="employee name"
    />
  </div>
);

export default FormName;
