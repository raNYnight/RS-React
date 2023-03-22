const FormPromotion = () => (
  <div className="field-block name-block">
    <label
      htmlFor="promotion-switch"
      className="label-block"
    >
      Employee promotion:
    </label>
    <input
      type="checkbox"
      id="promotion-switch"
      name="promotion"
      value="true"
    />
  </div>
);

export default FormPromotion;
