const FormTitle = () => (
  <div className="field-block title-block">
    <label
      htmlFor="title-select"
      className="label-block"
    >
      Select a developer team position:
    </label>
    <select
      id="title-select"
      className="title-select"
    >
      <option
        value="frontend-developer"
        defaultChecked
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
  </div>
);

export default FormTitle;
